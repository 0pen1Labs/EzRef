import { LinkIcon } from '@heroicons/react/24/outline'
import { RectangleStackIcon } from '@heroicons/react/24/outline'
import dayjs from '@/lib/datejs'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { LinkItem } from '@/Types/Link'

type Props = {
  item: LinkItem
}

function ListLinksItem({ item }: Props) {
  const status = true
  const name = !item.name || item.name == '' ? `Untitled-Link` : item.name

  return (
    <Link
      href={`/dashboard/form/${item.id}`}
      className="flex w-full flex-row items-center justify-between p-4 hover:bg-foreground/5">
      <div className="flex flex-col items-start">
        <div className="flex flex-row items-center space-x-2">
          <span className="text-base font-semibold text-foreground">
            {name}
          </span>
          <span
            className={`text-base font-semibold ${
              status ? 'text-active' : 'text-inactive'
            }`}>
            {status ? 'active' : 'inactive'}
          </span>
        </div>
        <div className="mt-2 flex flex-row items-center space-x-2">
          <span className="text-sm font-extralight text-foreground/50">
            Generated on:
          </span>
          <span className="text-sm font-normal text-foreground/80">
            {dayjs(item.createdAt).local().format('DD-MMM-YY  hh:mm')}
          </span>
        </div>
      </div>

      <div className="flex flex-row items-center space-x-4">
        <Link href={'/dashboard'} className="hover:opacity-75">
          <LinkIcon className="h-6 w-6 text-foreground" />
        </Link>
        <Link href={'/dashboard/response'} className="hover:opacity-75">
          <RectangleStackIcon className="h-6 w-6 text-foreground" />
        </Link>
      </div>
    </Link>
  )
}

export default ListLinksItem
