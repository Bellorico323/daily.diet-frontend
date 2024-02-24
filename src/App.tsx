import './output.css'

import { QueryClientProvider } from '@tanstack/react-query'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { useTheme } from './contexts/ThemeContext'
import { queryClient } from './lib/react-query'
import { router } from './routes'

export function App() {
  const { darkMode } = useTheme()

  return (
    <div className={`antialiased ${darkMode}`}>
      <HelmetProvider>
        <Helmet titleTemplate="%s | daily.diet" />
        <Toaster richColors />
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </HelmetProvider>
    </div>
  )
}
