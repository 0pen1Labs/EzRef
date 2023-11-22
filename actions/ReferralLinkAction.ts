'use server'

import { redirect } from 'next/navigation'

export const addReferralLink = async (data: FormData) => {
  let name: string, linkCode: string, domain: string
  //TODO - call create Link API and revalidate //Top - LIST
  redirect('/dashboard/form')
}
