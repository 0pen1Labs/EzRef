'use server'

import { redirect } from 'next/navigation'
import { auth } from '@clerk/nextjs'
import { revalidateTag } from 'next/cache'

export const addReferralLink = async (data: FormData) => {
  const { getToken } = auth()
  let name: string, formCode: string, domain: string
  const token = await getToken();

  const res = await fetch(`${process.env.BASE_URL}/v1/api/auth/register`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      formCode: data.get('endDomain'),
    }),
  })

  if(res.ok){
    revalidateTag()
    redirect('/dashboard/form')
  }

}
