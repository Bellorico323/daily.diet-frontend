import { Moon, Sun, Utensils } from 'lucide-react'
import { Outlet } from 'react-router-dom'

import { useTheme } from '../../contexts/ThemeContext'

export function AppLayout() {
  const { toggleDarkMode, darkMode } = useTheme()

  return (
    <div className="h-full min-h-screen w-full dark:bg-stone-950">
      <header className="mx-auto flex w-[1440px] items-center justify-between  px-10 py-8 ">
        <div className="flex items-center justify-center gap-3">
          <Utensils className="h-8 w-8 text-stone-900 dark:text-stone-100" />
          <span className="block text-xl  font-bold text-stone-900 dark:text-stone-100">
            Daily diet
          </span>
        </div>

        <div className="flex items-center gap-4">
          <button
            className="group flex h-10 w-10 items-center justify-center rounded-md transition duration-200 hover:bg-stone-100 hover:text-stone-400 dark:hover:bg-stone-900"
            onClick={() => toggleDarkMode()}
          >
            {darkMode === 'dark' ? (
              <Sun className="h-6 w-6 text-stone-500 group-hover:text-stone-600 dark:text-stone-300 dark:group-hover:text-stone-300" />
            ) : (
              <Moon className="h-6 w-6 text-stone-500 group-hover:text-stone-600 dark:text-stone-300 dark:group-hover:text-stone-300" />
            )}
          </button>

          <img
            src="https://github.com/Bellorico323.png"
            alt=""
            className="h-10 w-10 rounded-full"
          />
        </div>
      </header>

      <div className="mx-auto w-[1440px]">
        <Outlet />
      </div>
    </div>
  )
}
