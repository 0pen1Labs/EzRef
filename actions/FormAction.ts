'use server'

import { FormSchema } from '@/redux/slices/FormSlice'

export const saveFormAndFinish = async (
  formData: FormData,
  formStructure: Array<FormSchema>,
) => {
  let name: string, linkCode: string, domain: string
  //TODO -  call save form API' and show final share URL
}
