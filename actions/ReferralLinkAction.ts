'use server'

import { redirect } from 'next/navigation'
import { auth } from '@clerk/nextjs'
import { revalidateTag } from 'next/cache'
import { refLinkSchema } from '@/validation/reflinkSchema'
import { z } from 'zod'

export const addReferralLink = async (data: z.infer<typeof refLinkSchema>) => {
  const { getToken } = auth()
  const token = await getToken()

  const res = await fetch(`${process.env.BASE_URL}/v1/api/ref/generate`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  })

  const resData = await res.json()
  console.log(resData)

  if (resData.success) {
    revalidateTag('links')
    redirect(`/dashboard/form/${resData.data.id}`)
  } else {
    console.log(resData)
    return { ...resData }
  }
}
