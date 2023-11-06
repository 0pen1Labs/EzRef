'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import GithubLightLogo from '@/public/github_light.svg'
import GithubDarkLogo from '@/public/github_dark.svg'

export default function GithubButton() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <Image
      src={theme == 'light' ? GithubDarkLogo : GithubLightLogo}
      width={25}
      height={25}
      alt={'Theme'}
    />
  )
}
