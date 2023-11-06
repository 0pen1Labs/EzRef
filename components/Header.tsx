import Image from 'next/image'
import Logo from '@/public/reflink_logo.png'
import { ThemeSwitcher } from './ThemeSwitcher'

import Link from 'next/link'
import GithubButton from './GithubButton'

type Props = {}

export default function Header({}: Props) {
  return (
    <header className="text-foreground bg-background px-32 py-8">
      <nav className="flex items-center justify-between">
        <div className="flex items-center">
          <Image src={Logo} width={45} height={45} alt="Logo" />
          <div className="ml-2 text-lg font-semibold tracking-wide">
            RefLink
          </div>
        </div>
        // TODO add Login and sign up flow hare
        <ul className="flex items-center gap-4">
          <li className="text-sm font-light hover:opacity-70">
            <Link href={'/'}>Login</Link>
          </li>
          <li className="text-sm font-light hover:opacity-70">
            <Link href={'/'}>Signup</Link>
          </li>
          <li>
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
