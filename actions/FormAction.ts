'use server'

import { FormSchema } from '@/redux/slices/FormSlice'
import { auth } from '@clerk/nextjs'

export const saveFormAndFinish = async (
  isFavorite: boolean,
  linkId: string,
  formStructure: Array<FormSchema>,
) => {
  const { getToken } = auth()
  const token = await getToken()

  const payload = {
    isFavorite,
    linkId,
    formStructure,
  }

  console.log("payload",payload)

  const res = await fetch(`${process.env.BASE_URL}/v1/api/form/addform`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  })

  const resData = await res.json();
  console.log(resData)
  return { ...resData }
}
