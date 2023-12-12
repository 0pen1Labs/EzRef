import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Providers } from '../providers/providers'
import { ClerkProvider } from '@clerk/nextjs'

const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'] })

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
          card: 'border border-foreground/20 bg-background',
          headerTitle: 'text-foreground',
          headerSubtitle: 'text-foreground/70',
          socialButtonsIconButton:
            'border border-foreground/20 bg-background hover:bg-foreground/5',
          dividerLine: 'bg-foreground/20',
          dividerText: 'text-foreground/70',
          formFieldLabel: 'text-foreground',
          formFieldInput:
            'text-foreground border border-foreground/20 hover:border-foreground/80 bg-background',
          formButtonPrimary: 'bg-purple/80 text-foreground hover:bg-purple',
          footerActionText: 'text-foreground/50 font-light',
          footerActionLink:
            'text-purple hover:text-purple hover:underline font-bold',
          userButtonBox: 'flex flex-row-reverse',
          userButtonOuterIdentifier: 'text-foreground',
          userPreviewMainIdentifier: 'text-foreground',
          userPreviewSecondaryIdentifier: 'text-foreground/70',
          userButtonPopoverActionButton: 'group',
          userButtonPopoverActionButtonIcon:
            'text-foreground group-hover:opacity-50',
          userButtonPopoverActionButtonText:
            'text-foreground group-hover:text-foreground/50',
          userButtonPopoverFooter: 'hidden',
          navbarButtons: 'flex flex-col space-y-4',
          badge: 'bg-primary/20 text-primary',
          profileSectionPrimaryButton: 'text-purple',
        },
      }}
    >
      <html lang="en">
        <body className={jetBrainsMono.className}>
          <Providers>{children}</Providers>
        </body>
      </html>
    </ClerkProvider>
  )
}
