'use client'

import { useEffect } from 'react'
import LinkInputEzref from './LinkInputEzref'
import { useDispatch, useSelector } from '@/hooks/useReduxHooks'
import { setLinkCode } from '@/redux/slices/GenerateLinkSlice'
import { addReferralLink } from '@/actions/ReferralLinkAction'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import { SubmitErrorHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import { refLinkSchema } from '@/validation/reflinkSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormMessage } from './ui/form'
import { nanoid } from 'nanoid'
import { useToast } from './ui/use-toast'
import { Input } from './ui/input'

const formId = nanoid(16)

function GenerateNewLinkCard() {
  const name = useSelector((state) => state.rootReducer.referralLink.name)
  const randomFormId = useSelector(
    (state) => state.rootReducer.referralLink.linkCode,
  )
  const domain = useSelector((state) => state.rootReducer.referralLink.domain)
  const dispatch = useDispatch()
  const { toast } = useToast()
  const values = { name: name, formCode: randomFormId, domain: domain }

  useEffect(() => {
    if (randomFormId === '') {
      dispatch(setLinkCode(formId))
    }
  }, [])

  const refLinkForm = useForm<z.infer<typeof refLinkSchema>>({
    resolver: zodResolver(refLinkSchema),
    defaultValues: {
      name: name,
      formCode: randomFormId,
      domain: domain,
    },
    values,
  })

  const onSubmit = async (data: z.infer<typeof refLinkSchema>) => {
    console.log(data)
    const res = await addReferralLink(data)
    if (res) {
      toast({
        variant: 'destructive',
        title: 'Something went wrong',
        description: res.message,
      })
    } else {
      toast({
        title: 'Link Generated',
        description: `link: https://${data.domain}/${data.formCode}`,
      })
    }

    refLinkForm.reset()
  }

  const onError: SubmitErrorHandler<z.infer<typeof refLinkSchema>> = (
    error,
  ) => {
    console.log(error)
    toast({
      variant: 'destructive',
      title: 'Error',
      description: (
        <div>
          {Object.values(error).map((item: any) => (
            <ul className="list-disc">{item.message}</ul>
          ))}
        </div>
      ),
    })
    refLinkForm.reset()
  }

  return (
    <div className="flex w-full flex-col rounded-md bg-gradient-to-t from-[#797979]/10 to-background p-10 dark:bg-gradient-to-t dark:from-[#121212]/30 dark:to-background">
      <div className="text-2xl font-normal text-foreground/80">
        Generate new referral
      </div>
      <Form {...refLinkForm}>
        <form
          autoComplete="off"
          onSubmit={refLinkForm.handleSubmit(onSubmit, onError)}
          className="mt-4 flex flex-col"
        >
          <FormField
            control={refLinkForm.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Name your referral (optional)"
                    className="mb-3 w-4/12 rounded-md border border-foreground/20 bg-gray-50 px-4 py-2 text-base font-thin text-foreground outline-none placeholder:text-foreground/30 hover:border-foreground/50 focus:border-foreground/50 dark:bg-foreground/5"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Tabs defaultValue="ezref" className="my-3">
            <TabsList className="mb-1">
              <TabsTrigger value="ezref">EzRef Domain</TabsTrigger>
              <TabsTrigger value="custom">Custom Domain</TabsTrigger>
            </TabsList>
            <TabsContent value="ezref">
              <LinkInputEzref type="ezref" form={refLinkForm} />
            </TabsContent>
            <TabsContent value="custom">
              <LinkInputEzref type="custom" form={refLinkForm} />
            </TabsContent>
          </Tabs>
        </form>
      </Form>
    </div>
  )
}

export default GenerateNewLinkCard
