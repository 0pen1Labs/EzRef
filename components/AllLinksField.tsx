import { LinkItem } from '@/Types/Link'
import { Separator } from './ui/separator'
import {
  TrashIcon,
  PencilSquareIcon,
  ArrowTopRightOnSquareIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline'
import { Button } from './ui/button'
import Link from 'next/link'
type Props = {
  item: LinkItem
}

function AllLinksField({ item }: Props) {
  const status = true
  const name = !item.name || item.name == '' ? `Untitled-Link` : item.name
  const url = `http://${item.domain}/${item.formCode}`

  function handleDeleteClick() {}

  return (
    <div className="flex w-full flex-row flex-nowrap items-center justify-between border-t p-3">
      <div className="h-full flex-grow flex-col items-start justify-evenly space-y-3 ">
        <div className="flex flex-row items-center space-x-4 text-lg font-bold text-foreground/80">
          <span>{name}</span>
          <span
            className={`text-xs font-thin ${
              status ? 'text-active' : 'text-inactive'
            }`}>
            {status ? 'active' : 'inactive'}
          </span>
        </div>
        <div className="text-base font-light text-foreground/70">{url}</div>
      </div>
      <div className="flex flex-row items-center justify-center space-x-3 self-stretch">
        <div className="flex flex-row items-center space-x-2">
          <Button variant={'outline'} size={'sm'}>
            Responses
          </Button>
          <Button variant={'ghost'} size={'icon'} asChild>
            <Link href={`/dashboard/form/${item.id}`}>
              <PencilSquareIcon className="h-5 w-5 text-foreground hover:cursor-pointer" />
            </Link>
          </Button>
        </div>
        <Separator className="py-3" orientation="vertical" />
        <Button variant={'ghost'} size={'icon'}>
          <TrashIcon className="h-5 w-5 text-destructive hover:cursor-pointer" />
        </Button>
      </div>
    </div>
  )
}

export default AllLinksField
