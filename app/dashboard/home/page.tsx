import GenerateNewLinkCard from '@/components/GenerateNewLinkCard'
import { Divider } from '@nextui-org/react'

export default function Home() {
  return (
    <div className="flex flex-col items-center p-10">
      <div className="mt-10 flex w-4/6 justify-center ">
        <GenerateNewLinkCard />
      </div>

      <Divider className="my-8" />

      <div></div>
    </div>
  )
}
