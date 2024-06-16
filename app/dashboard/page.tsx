import GenerateNewLinkCard from '@/components/GenerateNewLinkCard'
import { currentUser } from '@clerk/nextjs'
import { User } from '@clerk/nextjs/server'
import { auth } from '@clerk/nextjs'
import HomeLinkList from '@/components/HomeLinkList'
import { Separator } from '@/components/ui/separator'
import { SparklesCore } from '@/components/ui/sparkles'

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



<button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
  <span className="absolute inset-0 overflow-hidden rounded-full">
    <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
  </span>
  <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
    <span>
      Tailwind Connect
    </span>
    <svg
      fill="none"
      height="16"
      viewBox="0 0 24 24"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.75 8.75L14.25 12L10.75 15.25"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  </div>
  <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
</button>