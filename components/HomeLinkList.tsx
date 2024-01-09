import ListLinksItem from './ListLinksItem'
import { auth } from '@clerk/nextjs'
import NoDataSvg from '@/public/nodata.svg'
import Image from 'next/image'

const getList = async () => {
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

  if (response.ok) {
    const data = await response.json()
    console.log(data.data)
    return data
  }

  return null
}

async function HomeLinkList() {
  const res = await getList()

  const noData = (
    <div className="mt-8 flex w-full flex-col items-center justify-center">
      <Image
        width={200}
        height={200}
        src={NoDataSvg}
        className="opacity-50"
        alt="No data found image"
      />
      <div className="text-xl font-light text-foreground/80">No data</div>
      <div className="text-sm font-light text-foreground/50">
        No links found or something went wrong!
      </div>
    </div>
  )

  const listView = (
    <div className="mt-3 flex w-full flex-col items-start justify-start overflow-hidden">
      {res.data.map((item: any) => {
        return (
          <ListLinksItem
            title={item.name ? item.name : ``}
            createdAt={'10-NOV-23 / 12:08'}
            key={item.id}
            status={item.status}
          />
        )
      })}
    </div>
  )

  return (
    <div className="flex w-4/6 flex-grow flex-col items-start justify-normal">
      <div className="text-2xl font-light text-foreground/50">Your Links</div>
      {res.data.length != 0 ? listView : noData}
    </div>
  )
}

export default HomeLinkList
