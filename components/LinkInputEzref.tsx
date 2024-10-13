'use client'
import { GlobeIcon, MagicWandIcon, ReloadIcon } from '@radix-ui/react-icons'
import { useDispatch, useSelector } from '@/hooks/useReduxHooks'
import { setDomain } from '@/redux/slices/GenerateLinkSlice'
import { useEffect } from 'react'
import { FormControl, FormField, FormItem } from './ui/form'
import { UseFormReturn } from 'react-hook-form'
import { z } from 'zod'
import { refLinkSchema } from '@/validation/reflinkSchema'
import { Input } from './ui/input'

type Props = {
  type: 'ezref' | 'custom'
  form: UseFormReturn<z.infer<typeof refLinkSchema>>
}
function LinkInputEzref({ type, form }: Props) {
  const domain = useSelector((state) => state.rootReducer.referralLink.domain)
  const dispatch = useDispatch()

  useEffect(() => {
    if (type === 'ezref') {
      dispatch(setDomain('ezref.in'))
    } else {
      dispatch(setDomain(''))
    }
  }, [type])

  return (
    <div className="peer/endDomain flex flex-row rounded-md border border-foreground/20 bg-background px-4 py-1">
      <div className="flex flex-row items-center space-x-4">
        <GlobeIcon className="h-6 w-6 text-foreground" />
        {type == 'ezref' ? (
          <div className="flex flex-row space-x-1">
            <span className="text-lg font-light text-foreground/60">
              {`https://${domain}`}
            </span>
            <span className="rotate-12 text-lg font-thin text-foreground/60">
              |
            </span>
          </div>
        ) : (
          <div className="flex flex-row items-center space-x-1">
            <FormField
              control={form.control}
              name="domain"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="your-domain.com"
                      className="w-full rounded-md border border-foreground/10 bg-gray-50 p-1 text-base font-light text-foreground/80 outline-none hover:border-foreground/20 dark:bg-foreground/5"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <span className="rotate-12 text-lg font-thin text-foreground/60">
              |
            </span>
          </div>
        )}
      </div>
      <div className="ms-2 flex w-full flex-grow flex-row items-center justify-between space-x-4">
        <FormField
          control={form.control}
          name="formCode"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input
                  {...field}
                  className="flex w-full flex-grow rounded-md border border-foreground/10 bg-gray-50 px-2 py-1 text-base font-light text-foreground/80 outline-none hover:border-foreground/20 dark:bg-foreground/5"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <button
          disabled={form.formState.isSubmitting}
          type="submit"
          className="flow-row group group ms-2 flex items-center border-none bg-transparent outline-none">
          <span className="text-base font-bold text-primary/80 group-hover:text-primary">
            Generate
          </span>
          {form.formState.isSubmitting ? (
            <ReloadIcon className="mx-4 h-10 w-5 animate-spin text-foreground opacity-80 group-hover:opacity-100" />
          ) : (
            <MagicWandIcon className="mx-4 h-10 w-5 text-foreground opacity-80 group-hover:opacity-100" />
          )}
        </button>
      </div>
    </div>
  )
}

export default LinkInputEzref
