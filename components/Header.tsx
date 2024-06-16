import { ThemeSwitcher } from './ThemeSwitcher'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { buttonVariants } from '@/components/ui/button'
import Logo from './Logo'
import Link from 'next/link'
import { cn } from '@/lib/utils'

type Props = {
  className?: string 
}

export default function Header({className}: Props) {
  return (
    <header className={cn("bg-background px-32 py-4 pt-6 text-foreground", className) }>
      <nav className="flex items-center justify-between">
        <Logo />
        <ul className="flex items-center space-x-4">
          <li>
            <Link
              href="/dashboard"
              className={buttonVariants({ variant: 'outline' })}
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard"
              className={buttonVariants({ variant: 'ghost' })}
            >
              SignIn
            </Link>
          </li>
          <div className="flex space-x-2">
            <li>
              <Link
                href="https://github.com/0pen1Labs/RefLink"
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({ variant: 'ghost', size: 'icon' })}
              >
                <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem]" />
              </Link>
            </li>
            <li className="flex items-center justify-center">
              <ThemeSwitcher />
            </li>
          </div>
        </ul>
      </nav>
    </header>
  )
}
