'use client'
import { ThemeSwitcher } from './ThemeSwitcher'
import GithubButton from './GithubButton'
import { Link } from '@nextui-org/react'
import Search from './Search'
import Feedback from './Feedback'
import { useHotKey } from '@/hooks/useHotKey'
import { useState } from 'react'

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
          href={'https://github.com/0pen1Labs/RefLink'}
          isExternal
          className="flex h-5 w-5 items-center justify-center hover:opacity-80"
        >
          <GithubButton />
        </Link>
        <ThemeSwitcher />
      </div>
    </div>
  )
}
