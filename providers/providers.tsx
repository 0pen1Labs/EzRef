'use client'
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider, useTheme } from 'next-themes'
import { type ThemeProviderProps } from 'next-themes/dist/types'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'

export function Providers({ children, ...props }: ThemeProviderProps) {
  return (
    <NextUIProvider>
      <NextThemesProvider
        attribute="class"
        defaultTheme="dark"
        disableTransitionOnChange>
        <Provider store={store}>{children}</Provider>
      </NextThemesProvider>
    </NextUIProvider>
  )
}
