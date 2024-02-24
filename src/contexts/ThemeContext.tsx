import { createContext, ReactNode, useContext, useState } from 'react'

interface ThemeContextProps {
  toggleDarkMode: () => void
  darkMode: string
}

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeContext = createContext({} as ThemeContextProps)

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [darkMode, setDarkMode] = useState<string>('dark')

  function toggleDarkMode() {
    if (darkMode === 'dark') {
      setDarkMode('light')
    } else {
      setDarkMode('dark')
    }
  }

  return (
    <ThemeContext.Provider value={{ toggleDarkMode, darkMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  return useContext(ThemeContext)
}
