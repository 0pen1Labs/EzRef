import GenerateNewLinkCard from '@/components/GenerateNewLinkCard'
import { currentUser } from '@clerk/nextjs'
import { User } from '@clerk/nextjs/server'
import { auth } from '@clerk/nextjs/server'
import HomeLinkList from '@/components/HomeLinkList'
import { Separator } from '@/components/ui/separator'
import { SparklesCore } from '@/components/ui/sparkles'
import { prisma } from '@/lib/db'
import { ScrollArea } from '@/components/ui/scroll-area'

async function sendClerkId(user: User) {
  const { userId } = auth()
  const email = user.emailAddresses[0].emailAddress

  if (userId) {
    const createUser = await prisma.user.upsert({
      where: {
        clerkId: userId,
      },
      update: {},
      create: {
        email,
        clerkId: userId,
      },
      select: {
        id: true,
        email: true,
      },
    })
    console.log(createUser)
  }
}
export default async function Dashboard() {
  const user = await currentUser()

  if (user) {
    sendClerkId(user)
  }
  return (
    <ScrollArea>
      <div className='className="relative px-10" flex flex-col items-center'>
        <div className="absolute flex h-40 w-full flex-col items-center">
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="h-full w-full"
            particleColor="#FFFFFF"
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 h-full w-full bg-background [mask-image:radial-gradient(450px_200px_at_top,transparent_20%,white)]"></div>
        </div>

        {/* Gradient */}
        <div className="absolute inset-x-60 top-0 h-[2px] w-2/3 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm" />
        <div className="absolute inset-x-80 top-0 h-px w-2/3 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        <div className="inset-x-100 absolute top-0 h-[5px] w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm" />
        <div className="inset-x-100 absolute top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent" />

        <div className="z-10 mt-10 flex w-4/6 justify-center ">
          <GenerateNewLinkCard />
        </div>

        <Separator className="my-8" />

        <HomeLinkList />
      </div>
    </ScrollArea>
  )
}
