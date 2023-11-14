import GenerateNewLinkCard from '@/components/GenerateNewLinkCard'
import ListLinksItem from '@/components/ListLinksItem'
import { Divider } from '@nextui-org/react'

export default async function Dashboard() {
  return (
    <div className="flex flex-col items-center p-10">
      <div className="mt-10 flex w-4/6 justify-center ">
        <GenerateNewLinkCard />
      </div>

      <Divider className="my-8" />

      <div className="flex w-4/6 flex-col items-start justify-normal">
        <div className="text-2xl font-light text-foreground/50">Your Links</div>
        <div className="flex w-full flex-col items-start justify-start overflow-hidden">
          {/* Change this to show list */}
          <ListLinksItem
            title={'GitHub SDE3 Ref'}
            createdAt={'10-NOV-23 / 12:08'}
            id={''}
            status={true}
          />
          <Divider className="my-2" />
          <ListLinksItem
            title={'GitHub SDE3 Ref'}
            createdAt={'10-NOV-23 / 12:08'}
            id={''}
            status={false}
          />
          <Divider className="my-2" />
          <ListLinksItem
            title={'GitHub SDE3 Ref'}
            createdAt={'10-NOV-23 / 12:08'}
            id={''}
            status={true}
          />
          <Divider className="my-2" />
          <ListLinksItem
            title={'GitHub SDE3 Ref'}
            createdAt={'10-NOV-23 / 12:08'}
            id={''}
            status={false}
          />
          <Divider className="my-2" />
          <ListLinksItem
            title={'GitHub SDE3 Ref'}
            createdAt={'10-NOV-23 / 12:08'}
            id={''}
            status={true}
          />
          <Divider className="my-2" />
          <ListLinksItem
            title={'GitHub SDE3 Ref'}
            createdAt={'10-NOV-23 / 12:08'}
            id={''}
            status={false}
          />
          <Divider className="my-2" />
          <ListLinksItem
            title={'GitHub SDE3 Ref'}
            createdAt={'10-NOV-23 / 12:08'}
            id={''}
            status={true}
          />
          <Divider className="my-2" />
          <ListLinksItem
            title={'GitHub SDE3 Ref'}
            createdAt={'10-NOV-23 / 12:08'}
            id={''}
            status={false}
          />
        </div>
      </div>
    </div>
  )
}
