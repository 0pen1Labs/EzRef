import Image from 'next/image'
import Link from 'next/link'

type Props = {
  name: string
  path: string
  icon: string
  selected?: boolean
  onMenuClick?: Function
}
export default function MenuItem({
  name,
  path,
  icon,
  onMenuClick,
  selected,
}: Props) {
  return (
    <Link
      href={path}
      className={`m-2 flex flex-row items-center rounded-md px-1 py-1 ${
        selected ? 'hover bg-purple/30' : 'hover:bg-purple/10'
      }`}
      onClick={() => {
        onMenuClick && onMenuClick()
      }}
    >
      <Image
        width={0}
        height={0}
        src={icon}
        alt="menu icon"
        className="h-5 w-5 fill-gray-500"
      />
      <div className="ml-2">{name}</div>
    </Link>
  )
}
