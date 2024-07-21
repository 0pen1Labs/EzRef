import Image from 'next/image'
import LogoImg from '@/public/reflink_logo.png'
function Logo() {
  return (
    <div className="flex items-center">
      <Image src={LogoImg} alt="Logo" width={40} height={40} />
      <div className="ml-2 text-2xl font-semibold uppercase tracking-wide">
        EzRef
      </div>
    </div>
  )
}

export default Logo
