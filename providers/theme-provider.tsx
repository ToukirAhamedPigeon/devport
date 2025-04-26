// components/theme-provider.tsx
'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeProvider({ children, ...props }: any) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // Return a div with the default dark theme to prevent flash
    return (
        <div style={{ visibility: 'hidden' }}>
          {children}
        </div>
      )
  }

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
      forcedTheme="dark"
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
}