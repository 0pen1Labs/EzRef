import Image from 'next/image'
import EditLinkIcon from '@/public/link_edit.svg'
import ResponseIcon from '@/public/response.svg'
import Link from 'next/link'

type Props = {
  title: string
  createdAt: string
  id: string
  status: boolean
}

function ListLinksItem({ title, createdAt, id, status }: Props) {
  return (
    <div className="flex w-full flex-row items-center justify-between p-4">
      <div className="flex flex-col items-start">
        <div className="flex flex-row items-center space-x-2">
          <span className="text-base font-semibold text-foreground">
            {title}
          </span>
          <span
            className={`text-base font-semibold ${
              status ? 'text-greenStatus' : 'text-redStatus'
            }`}
          >
            {status ? 'active' : 'inactive'}
          </span>
        </div>
        <div className="mt-2 flex flex-row items-center space-x-2">
          <span className="text-sm font-extralight text-foreground/50">
            Generated on:
          </span>
          <span className="text-sm font-normal text-foreground/80">
            {createdAt}
          </span>
        </div>
      </div>

      <div className="flex flex-row items-center space-x-4">
        <Link href={'/dashboard'} className="hover:opacity-75">
          <Image src={EditLinkIcon} alt={'Edit Link'} />
        </Link>
        <Link href={'/dashboard/response'} className="hover:opacity-75">
          <Image src={ResponseIcon} alt={'Check Response'} />
        </Link>
      </div>
    </div>
  )
}

export default ListLinksItem
