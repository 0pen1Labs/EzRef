'use client'
import { ThemeSwitcher } from './ThemeSwitcher'
import GithubButton from './GithubButton'
import Search from './Search'
import Feedback from './Feedback'
import { useHotKey } from '@/hooks/useHotKey'
import { useState } from 'react'
import { buttonVariants } from './ui/button'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

export default function DashboardTopNav() {
  const [show, setShow] = useState(false)
  const handleSearchClick = () => {
    console.log('Search Clicked')
    setShow(!show)
  }

  const handleClose = () => {
    setShow(false)
  }

  useHotKey(['ctrl', 'k'], handleSearchClick)
  return (
    <div className="flex flex-row items-center justify-between space-x-4">
      <div className="flex flex-row items-center space-x-4">
        <Search onSearchClick={handleSearchClick} />
        <Feedback userId="" />
        <Link
          href="https://github.com/0pen1Labs/RefLink"
          target="_blank"
          rel="noopener noreferrer"
          className={buttonVariants({ variant: 'ghost', size: 'icon' })}
        >
          <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem]" />
        </Link>
        <ThemeSwitcher />
      </div>
    </div>
  )
}
