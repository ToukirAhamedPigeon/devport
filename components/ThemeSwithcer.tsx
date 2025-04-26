'use client'

import { useTheme } from 'next-themes'

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="px-4 py-2 bg-primary text-primary-foreground rounded"
    >
      Toggle Theme
    </button>
  )
}

export default ThemeSwitcher;