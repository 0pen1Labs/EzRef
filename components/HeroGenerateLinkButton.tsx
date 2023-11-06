import Link from 'next/link'

function HeroGenerateLinkButton() {
  const handleOnClick = () => {}

  return (
    <div className="group relative">
      <div className="absolute -inset-0.5 rounded-md bg-gradient-to-r from-pink-500 to-cyan-300 opacity-75 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
      <Link
        href={'/profile'}
        className="text-foreground bg-background relative flex items-center space-x-8 rounded-md px-7 py-4 leading-none"
      >
        <div className="text-foreground bg-background">Generate Link</div>
        <div className="text-foreground bg-background animate-bounce-right">
          &rarr;
        </div>
      </Link>
    </div>
  )
}

export default HeroGenerateLinkButton
