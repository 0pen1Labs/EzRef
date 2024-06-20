import GenerateNewLinkCard from '@/components/GenerateNewLinkCard'
import { currentUser } from '@clerk/nextjs'
import { User } from '@clerk/nextjs/server'
import { auth } from '@clerk/nextjs/server'
import HomeLinkList from '@/components/HomeLinkList'
import { Separator } from '@/components/ui/separator'
import { SparklesCore } from '@/components/ui/sparkles'
import { prisma } from '@/lib/db'

async function sendClerkId(user: User) {
  const { userId,  } = auth()
  const email = user.emailAddresses[0].emailAddress

  if(userId){
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
    console.log(createUser);
  }
}
export default async function Dashboard() {
  const user = await currentUser()

  if (user) {
    sendClerkId(user)
  }
  return (
    <div className="flex flex-col items-center relative px-10">
      <div className="w-full h-40 flex flex-col items-center absolute">
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
 
        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-background [mask-image:radial-gradient(450px_200px_at_top,transparent_20%,white)]"></div>
      </div>

      {/* Gradient */}
      <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-2/3 blur-sm" />
      <div className="absolute inset-x-80 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-2/3" />
      <div className="absolute inset-x-100 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
      <div className="absolute inset-x-100 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />


      <div className="mt-10 flex w-4/6 justify-center z-10 ">
        <GenerateNewLinkCard />
      </div>

      <Separator className="my-8" />

      <HomeLinkList />
    </div>
  )
}