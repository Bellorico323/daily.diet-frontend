import { Utensils } from 'lucide-react'
import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <div className="grid min-h-screen w-full grid-cols-auth">
      <div className="flex flex-col items-center bg-stone-50 dark:bg-stone-950">
        <Outlet />
      </div>
      <div className="flex h-full flex-col items-end justify-between bg-stone-900 px-10 py-8 dark:bg-auth ">
        <div className="flex items-center justify-center gap-3">
          <Utensils className="h-8 w-8 text-stone-100" />
          <span className="block text-xl  font-bold text-stone-100">
            Daily diet
          </span>
        </div>

        <footer className="text-sm text-stone-100">
          Painel do cliente &copy; daily.diet - {new Date().getFullYear()}
        </footer>
      </div>
    </div>
  )
}
