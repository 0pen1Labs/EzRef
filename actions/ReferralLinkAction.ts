'use server'

import { redirect } from 'next/navigation'
import { auth } from '@clerk/nextjs'
import { revalidateTag } from 'next/cache'

export const addReferralLink = async (data: FormData) => {
  const { getToken } = auth()
  const token = await getToken()

  const res = await fetch(`${process.env.BASE_URL}/v1/api/ref/generate`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      formCode: data.get('endDomain'),
      domain: data.get('domain') ?? 'localhost:3000', //TODO change the domain in production
      name: data.get('title'),
    }),
  })

  const resData = await res.json()

  if (resData.success) {
    revalidateTag('links')
    redirect('/dashboard/form')
  }
}
