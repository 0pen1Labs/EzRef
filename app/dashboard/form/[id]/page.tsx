import { auth } from '@clerk/nextjs'
import FormBody from './FormBody'
import { redirect } from 'next/navigation'
import { prisma } from '@/lib/db'
import { LinkResponse } from '@/Types/Link'

type Params = {
  params: {
    id: string
  }
}

async function getLinkById(id: string) {
  const { userId } = auth()

  if (userId) {
    const refLink = await prisma.refLinks.findUnique({
      where: {
        clerkId: userId,
        id: id,
      },
      select: {
        id: true,
        name: true,
        description: true,
        domain: true,
        formCode: true,
        createdAt: true,
        updatedAt: true,
        Form: true
      }
    })
  
    if(refLink) {
      console.log(refLink);
      return refLink;
    } else {
      redirect('/dashboard')
    }
  } else {
    redirect('/dashboard')
  }
}

export default async function Form({ params }: Params) {
  const link = await getLinkById(params.id)

  return <FormBody item={link as LinkResponse} />
}
