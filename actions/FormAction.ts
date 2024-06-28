'use server'

import { FormSchema } from '@/Types/Link'
import { prisma } from '@/lib/db'
import { formStructureSchema } from '@/validation/formStructureSchema'
import { auth } from '@clerk/nextjs/server'
import { error } from 'console'
import { RedirectType, permanentRedirect, redirect } from 'next/navigation'

export const saveFormAndFinish = async (
  isFavorite: boolean,
  linkId: string,
  formStructure: Array<FormSchema>,
) => {
  const { userId } = auth()

  if (userId) {
    const form = await prisma.form.upsert({
      where: {
        refId: linkId,
      },
      update: {
        isFavorite: isFavorite,
        formFields: formStructure,
      },
      create: {
        refId: linkId,
        isFavorite: isFavorite,
        formFields: formStructure,
        title: null,
        description: null,
      },

      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        isFavorite: true,
        formFields: true,
      },
    })
    if (form) {
      console.log('form', form)
      return {
        success: true,
        message: 'Form saved successfully',
      }
    } else {
      return {
        success: false,
        message: 'Failed to save form',
      }
    }
  } else {
    permanentRedirect('/sign-in', RedirectType.replace)
  }
}
