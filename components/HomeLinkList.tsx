import ListLinksItem from './ListLinksItem'
import { auth } from '@clerk/nextjs'
import NoDataSvg from '@/public/nodata.svg'
import Image from 'next/image'
import { prisma } from '@/lib/db'
import { redirect } from 'next/navigation'

const getList = async () => {
  const { userId } = auth();

  if(userId) {
    const refLinks = await prisma.refLinks.findMany({
      take: 10,
      where: {
        user: {
          clerkId: {
            equals: userId,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
      select: {
        id: true,
        name: true,
        description: true,
        domain: true,
        createdAt: true,
        updatedAt: true,
        formCode: true,
        exp: true,
      },
    }) 

    if(refLinks) {
      return refLinks;
    } else {
      return null;
    }
  } else {
    redirect('/dashboard');
  }
}

async function HomeLinkList() {
  const res = await getList()

  console.log(res)

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
      {res && res.map((item: any) => {
        return <ListLinksItem item={item} key={item.id} />
      })}
    </div>
  )

  return (
    <div className="flex w-4/6 flex-grow flex-col items-start justify-normal">
      <div className="text-2xl font-light text-foreground/50">Your Links</div>
      {res && res.length != 0 ? listView : noData}
    </div>
  )
}

export default HomeLinkList
