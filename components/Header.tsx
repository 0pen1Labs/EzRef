import Image from 'next/image'
import Logo from '@/public/reflink_logo.png'
import { ThemeSwitcher } from './ThemeSwitcher'

import Link from 'next/link'
import GithubButton from './GithubButton'

type Props = {}

export default function Header({}: Props) {
  return (
    <header className="bg-background px-32 py-8 text-foreground">
      <nav className="flex items-center justify-between">
        <div className="flex items-center">
          <Image src={Logo} width={45} height={45} alt="Logo" />
          <div className="ml-2 text-2xl font-semibold uppercase tracking-wide">
            EzRef
          </div>
        </div>
        {/* TODO add Login and sign up flow hare */}
        <ul className="flex items-center gap-4">
          <li className="rounded-md bg-purple/50 px-8 py-2 text-sm font-light hover:cursor-pointer hover:bg-purple/80">
            <Link href={'/dashboard'}>Dashboard</Link>
          </li>
          <li className="text-sm font-light hover:opacity-70">
            <Link href={'/dashboard'}>Signup</Link>
          </li>
          <li className="hover:opacity-70">
            <Link href={'https://github.com/0pen1Labs/RefLink'}>
              <GithubButton />
            </Link>
          </li>
          <li className="flex items-center justify-center">
            <ThemeSwitcher />
          </li>
        </ul>
      </nav>
    </header>
  )
}
