import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useTheme } from 'next-themes'

type Props = {
  src: string
}

function MenuIcon({ src }: Props) {
  return (
    <Image
      width={0}
      height={0}
      src={src}
      alt="menu icon"
      className="h-5 w-5 fill-foreground"
    />
  )
}

export default MenuIcon
