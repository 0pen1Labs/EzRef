'use client'

import { Separator } from '@/components/ui/separator'
import { useDispatch, useSelector } from '@/hooks/useReduxHooks'
import {
  initialFormStructure,
  setFavorite,
  setFormStructure,
  setInitialState,
  setName,
} from '@/redux/slices/FormSlice'
import { Button } from '@/components/ui/button'
import FormPage from '@/components/FormPage'
import {
  FileIcon,
  StarIcon,
  StarFilledIcon,
  Share1Icon,
} from '@radix-ui/react-icons'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import ShareDialogContent from '@/components/ShareDialogContent'
import { Input } from '@/components/ui/input'
import { useEffect, useState } from 'react'
import { saveFormAndFinish } from '@/actions/FormAction'
import { useToast } from '@/components/ui/use-toast'
import LightBorderButton from '@/components/LightBorderButton'
import { FormSchema, LinkResponse } from '@/Types/Link'
import { ZodError, set, z } from 'zod'
import {
  formFieldSchema,
  formStructureSchema,
  formTitleFieldSchema,
} from '@/validation/formStructureSchema'

type Params = {
  item: LinkResponse
}

export default function FormBody({ item }: Params) {
  const formStructure: Array<FormSchema> = useSelector(
    (state) => state.rootReducer.form.formStructure,
  )
  const isFavorite: boolean = useSelector(
    (state) => state.rootReducer.form.isFavorite,
  )
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const name: string = item.name
  const dispatch = useDispatch()
  const [zodError, setZodError] = useState<
    | ZodError<
        Array<
          z.infer<typeof formTitleFieldSchema> | z.infer<typeof formFieldSchema>
        >
      >
    | undefined
  >(undefined)
  const { toast } = useToast()

  useEffect(() => {
    if (item.form && item.form.formFields.length !== 0) {
      dispatch(setFormStructure(item.form.formFields))
    } else {
      dispatch(setInitialState())
    }
  }, [])

  const handleAction = async (event: any) => {
    event.preventDefault()
    console.log('button clicked formData: ', formStructure)

    const isFavoriteFormStructureValid =
      formStructureSchema.safeParse(formStructure)

    if (!isFavoriteFormStructureValid.success) {
      console.log(
        'Invalid form structure:\n',
        isFavoriteFormStructureValid.error,
      )
      setZodError(isFavoriteFormStructureValid.error)
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to save form',
      })
    } else {
      const result = await saveFormAndFinish(isFavorite, item.id, formStructure)

      if (result.success) {
        setIsDialogOpen(true)
      } else {
        toast({
          variant: 'destructive',
          title: 'Failed to save',
          description: result.message,
        })
      }
    }
  }

  return (
    <form className="flex h-full w-full flex-col">
      <div className="sticky top-0 z-10 flex flex-col bg-background/70 px-4 opacity-75 backdrop-blur-md">
        <div className="flex flex-row items-center justify-between px-4 py-2">
          <div className="flex flex-row items-center space-x-2">
            <FileIcon className="h-6 w-6" />
            <Input
              onChange={(e) => dispatch(setName(e.target.value))}
              placeholder="Untitled"
              className="mb-1 w-40 border-foreground/10 bg-transparent p-1 text-xl font-bold text-foreground/80 outline-none placeholder:text-foreground/80 focus:border-foreground/10 focus:bg-foreground/10"
              value={name ? name : ''}
            />
            {!isFavorite ? (
              <StarIcon
                className={`h-6 w-6 text-foreground/50 hover:cursor-pointer hover:text-purple-500`}
                onClick={() => dispatch(setFavorite())}
              />
            ) : (
              <StarFilledIcon
                className={`h-6 w-6 text-purple-500 hover:cursor-pointer hover:opacity-80`}
                onClick={() => dispatch(setFavorite())}
              />
            )}
          </div>
          <div className="flex flex-row space-x-2">
            <Button
              variant="outline"
              className="rounded"
              onClick={(event) => handleAction(event)}>
              Save & Share <Share1Icon className="ml-2 h-10 w-4 " />
            </Button>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogContent className="sm:max-w-md ">
                <DialogHeader>
                  <DialogTitle>Share with</DialogTitle>
                  <DialogDescription>
                    Anyone who has this link will be able to view this.
                  </DialogDescription>
                </DialogHeader>
                <ShareDialogContent
                  domain={item.domain}
                  formCode={item.formCode}
                />
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <Separator />
      </div>
      <div className="flex flex-grow items-start justify-center">
        <FormPage formStructure={formStructure} formError={zodError} />
      </div>
    </form>
  )
}
