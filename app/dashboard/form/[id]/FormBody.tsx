'use client'

import { Separator } from '@/components/ui/separator'
import { useDispatch, useSelector } from '@/hooks/useReduxHooks'
import { FormSchema, initialFormStructure, setFavorite, setFormStructure, setName } from '@/redux/slices/FormSlice'
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

type LinkResponse = {
  id: string;
  name: string;
  description: string | null;
  domain: string;
  formCode: string;
  createdAt: string;
  updatedAt: string;
  Form: null | Form;
}

type Form = {
  id: string;
  title: string | null;
  description: string | null;
  isFavorite: boolean;
  formFields: Array<Object>;
}
type Params = {
  item: LinkResponse
}

export default function FormBody({ item }: Params) {
  const formStructure: FormSchema[] =  useSelector(
    (state) => state.rootReducer.form.formStructure,
  );
  const isFavorite: boolean = useSelector(state => state.rootReducer.form.isFavorite);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const name: string = item.name
  const dispatch = useDispatch()
  const { toast } = useToast()


  useEffect(() => {
    if(item.Form && item.Form.formFields.length !== 0){
      dispatch(setFormStructure(item.Form.formFields))    
    } else {
      dispatch(setFormStructure(initialFormStructure))
    }
  }, [])


  const handleAction = async () => {
    console.log('button clicked formData: ', formStructure);

    const result = await saveFormAndFinish(isFavorite, item.id, formStructure);

    if (result.success) {
      setIsDialogOpen(true)
    } else {
      setIsDialogOpen(false)
      toast({
        variant: 'destructive',
        title: 'Failed to save',
        description: result.message,
      })
    }
  }

  function handleOpen(){
    console.log("Dialog state",isDialogOpen)
  }

  return (
    <form className="flex h-full w-full flex-col">
      <div className="sticky top-0 z-10 flex flex-col bg-background/70 px-4 opacity-75 backdrop-blur-md">
        <div className="flex flex-row items-center justify-between px-4 py-2">
          <div className="flex flex-row items-center space-x-2">
            <FileIcon className="h-6 w-6" />
            <Input
              onChange={(e) => dispatch(setName(e.target.value))}
              placeholder='Untitled'
              className="mb-1 w-40 border-foreground/10 bg-transparent p-1 text-xl font-bold text-foreground/80 outline-none placeholder:text-foreground/80 focus:border-foreground/10 focus:bg-foreground/10"
              value={name ? name : ''}
            />
            {!isFavorite ? 
              <StarIcon
                className={`h-6 w-6 text-foreground/50 hover:cursor-pointer hover:text-purple-500`}
                onClick={() => dispatch(setFavorite())}
              />
             : 
              <StarFilledIcon
                className={`h-6 w-6 text-purple-500 hover:cursor-pointer hover:opacity-80`}
                onClick={() => dispatch(setFavorite())}
              />
            }
          </div>
          <div className="flex flex-row space-x-2">
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="rounded"
                  onClick={handleAction}
                >
                  Save & Share <Share1Icon className="ml-2 h-10 w-4 " />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
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
        <FormPage formStructure={formStructure} />
      </div>
    </form>
  )
}
