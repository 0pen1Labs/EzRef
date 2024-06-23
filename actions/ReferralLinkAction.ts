'use server'

import { redirect } from 'next/navigation'
import { auth } from '@clerk/nextjs'
import { revalidateTag } from 'next/cache'
import { refLinkSchema } from '@/validation/reflinkSchema'
import { z } from 'zod'
import { prisma } from '@/lib/db'

export const addReferralLink = async (data: z.infer<typeof refLinkSchema>) => {
  const { userId } = auth()
  let refLink
  if (userId) {
    try {
      refLink = await prisma.refLinks.create({
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
    } catch (error) {
      return {
        success: false,
        message: 'Not able to create Link, please make sure FormCode is unique',
      }
    }

    if (refLink) {
      revalidateTag('links')
      redirect(`/dashboard/form/${refLink.id}`)
    }
  }
}
