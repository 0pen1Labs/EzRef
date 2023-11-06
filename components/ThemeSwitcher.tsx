'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Dark from '@/public/dark.svg'
import Light from '@/public/light.svg'

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const handleClick = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <button onClick={handleClick}>
      <Image
        className="hover:opacity-40"
        src={theme == 'light' ? Dark : Light}
        width={28}
        height={28}
        alt={'Theme'}
      />
    </button>
  )
}
