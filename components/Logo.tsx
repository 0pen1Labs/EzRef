import Image from 'next/image'
import LogoImg from '@/public/reflink_logo.png'
function Logo() {
  return (
    <div className="flex items-center">
      <Image src={LogoImg} alt="Logo" className="h-10 w-10" />
      <div className="ml-2 text-2xl font-semibold uppercase tracking-wide">
        EzRef
      </div>
    </div>
  )
}

export default Logo
