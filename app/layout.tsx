import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Providers } from '@/providers/providers'
import { ClerkProvider } from '@clerk/nextjs'
import { cn } from '@/lib/utils'

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--jetbrains-mono',
})

export const metadata: Metadata = {
  title: 'EzRef',
  description: 'Streamline Referrals -> Unlock Top Talent!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider
      appearance={{
        elements: {
          cardBox: 'border border-foreground/20',
          card: 'border-none bg-background shadow-none',
          headerTitle: 'text-foreground/80',
          headerSubtitle: 'text-foreground/50',
          socialButtonsIconButton:
            'border border-foreground/20 bg-foreground/5 hover:bg-foreground/30 hover:bg-foreground/5',
          dividerLine: 'bg-foreground/20',
          dividerText: 'text-foreground/50',
          formFieldLabel: 'text-foreground/80',
          formFieldInput:
            'text-foreground border border-foreground/10 hover:border-foreground/50 bg-background outline-none',
          formButtonPrimary: 'bg-purple/80 text-foreground hover:bg-purple',
          footer: 'mt-0 !bg-gradient-to-r from-background to-background pt-0',
          footerAction: 'bg-background w-full flex justify-center items-center',
          footerActionText: 'text-foreground/50 font-light',
          footerActionLink:
            'text-purple hover:text-purple hover:underline font-bold',
          userButtonTrigger: 'flex flex-row-reverse',
          userButtonOuterIdentifier: 'text-foreground',
          userPreviewMainIdentifier: 'text-foreground',
          userPreviewSecondaryIdentifier: 'text-foreground/70',
          userButtonPopoverCard: 'rounded-md border border-input bg-background',
          userButtonPopoverMain: '!bg-background',
          userButtonPopoverActionButton:
            'text-foreground/70 hover:text-foreground',
          userButtonPopoverActionButtonIcon:
            'text-foreground group-hover:opacity-50',
          userButtonPopoverFooter: 'hidden',
          navbarButtons: 'flex flex-col space-y-4',
          badge: 'bg-primary/20 text-primary',
          profileSectionPrimaryButton: 'text-purple',
        },
      }}>
      <html lang="en">
        <body
          className={cn(
            'min-h-screen bg-background font-sans antialiased',
            jetBrainsMono.variable,
          )}>
          <Providers>{children}</Providers>
        </body>
      </html>
    </ClerkProvider>
  )
}
