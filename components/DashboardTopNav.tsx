'use client'
import { ThemeSwitcher } from './ThemeSwitcher'
import GithubButton from './GithubButton'
import { Link } from '@nextui-org/react'
import Search from './Search'
import Feedback from './Feedback'

export default function DashboardTopNav() {
  const handleSearchClick = () => {
    console.log('Search Clicked')
  }

  return (
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
  )
}
