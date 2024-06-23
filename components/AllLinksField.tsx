import { LinkItem } from '@/Types/Link'

type Props = {
  item: LinkItem
}

function AllLinksField({ item }: Props) {
  const status = true
  const name = !item.name || item.name == '' ? `Untitled-Link` : item.name
  const url = `http://${item.domain}/${item.formCode}`
  return (
    <div className="w-full flex-row items-center justify-between border-t p-3">
      <div className="h-full flex-grow flex-col items-start justify-evenly space-y-3">
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
    </div>
  )
}

export default AllLinksField
