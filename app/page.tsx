import { ThemeSwitcher } from '@/components/ThemeSwitcher'
import Image from 'next/image'

export default function Home() {
  return (
    <main className=" text-foreground bg-background flex min-h-screen flex-col items-center justify-between p-24">
      <ThemeSwitcher />
      Main Page
    </main>
  )
}
