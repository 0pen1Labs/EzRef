import GenerateNewLinkCard from '@/components/GenerateNewLinkCard'
import { currentUser } from '@clerk/nextjs'
import { User } from '@clerk/nextjs/server'
import { auth } from '@clerk/nextjs'
import HomeLinkList from '@/components/HomeLinkList'
import { Separator } from '@/components/ui/separator'

async function sendClerkId(user: User) {
  const { getToken } = auth()
  const email = user.emailAddresses[0].emailAddress
  const token = await getToken()
  const response = await fetch(`${process.env.BASE_URL}/v1/api/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      email: email,
    }),
  })

  const userData = await response.json()
  console.log(userData)
}

const getLinkList = async () => {
  const { getToken } = auth()
  const token = await getToken()
  const response = await fetch(`${process.env.BASE_URL}/v1/api/ref/links`, {
    next: {
      tags: ['links'],
    },
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
}
export default async function Dashboard() {
  const user = await currentUser()

  if (user) {
    sendClerkId(user)
  }
  return (
    <div className="flex flex-col items-center p-10">
      <div className="mt-10 flex w-4/6 justify-center ">
        <GenerateNewLinkCard />
      </div>

      <Separator className="my-8" />

      <HomeLinkList />
    </div>
  )
}
