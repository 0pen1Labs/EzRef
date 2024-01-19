import { auth } from '@clerk/nextjs'
import FormBody from './FormBody'
import { redirect } from 'next/navigation'

type Params = {
  params: {
    id: string
  }
}

async function getLinkById(id: string) {
  const { getToken } = auth()
  const token = await getToken()

  const res = await fetch(`${process.env.BASE_URL}/v1/api/ref/link`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ id: id }),
  })

  const resData = await res.json()
  console.log(resData)
  return resData
}

export default async function Form({ params }: Params) {
  const link = await getLinkById(params.id)

  if (!link.success) {
    redirect('/dashboard/')
  }

  return <FormBody id={params.id} />
}
