import { cn } from "@/lib/utils"

type FooterProps = {
  className?: string;
}

function Footer({className}: FooterProps) {
  return (
    <footer className={cn("flex w-screen items-start justify-center bg-background py-8 text-xs text-foreground/60", className)}>
      || Made with &#x1F9E1; in India ||
    </footer>
  )
}

export default Footer
