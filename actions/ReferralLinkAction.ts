'use server'

import { redirect } from 'next/navigation'
import { auth } from '@clerk/nextjs'
import { revalidateTag } from 'next/cache'
import { refLinkSchema } from '@/validation/reflinkSchema'
import { z } from 'zod'
import { prisma } from '@/lib/db'

export const addReferralLink = async (data: z.infer<typeof refLinkSchema>) => {
  const { userId } = auth()
  if (userId) {
    const refLink = await prisma.refLinks.create({
      data: { ...data, clerkId: userId },
      select: {
        id: true,
        name: true,
        description: true,
        domain: true,
        formCode: true,
        exp: true,
      },
    })

    if (refLink) {
      revalidateTag('links')
      redirect(`/dashboard/form/${refLink.id}`)
    } else {
      return {
        success: false,
        message: 'Not able to create Link, please try again',
      }
    }
  }
}
