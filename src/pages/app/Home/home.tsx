import * as Dialog from '@radix-ui/react-dialog'
import { ArrowUpRight, Pencil, Plus, Trash2 } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useNavigate } from 'react-router-dom'

import { CreateMealModal } from './createMealModal'

export function Home() {
  const navigate = useNavigate()

  function handleNavigation() {
    navigate(`/statistics`)
  }

  return (
    <>
      <Helmet title="Home" />
      <div className="flex h-full flex-col px-10 pt-12 ">
        <div
          className="group relative flex flex-1 cursor-pointer items-baseline justify-center gap-2 rounded-md bg-green-300 py-9  hover:bg-green-400 hover:bg-opacity-70 dark:bg-green-800 dark:hover:bg-green-700 dark:hover:bg-opacity-70"
          onClick={handleNavigation}
        >
          <ArrowUpRight className="absolute right-1 top-1 h-6 w-6 text-green-700 dark:text-green-950" />
          <span className="text-3xl font-bold text-green-900 group-hover:text-green-800 dark:text-green-300 dark:group-hover:text-green-400">
            90,86%
          </span>
          <span className="text-green-700 group-hover:text-green-700 dark:text-green-200  dark:group-hover:text-green-300">
            das refeições dentro da dieta
          </span>
        </div>

        <div className="mt-9 flex items-center justify-between">
          <h2 className="text-2xl font-semibold tracking-wide text-stone-900 dark:text-stone-50">
            Refeições
          </h2>
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button className="flex items-center justify-center gap-2 rounded-md bg-stone-800 p-3 text-stone-100 hover:bg-stone-700 hover:text-stone-200 dark:bg-violet-800 dark:hover:bg-violet-600">
                <Plus className="h-4 w-4" />
                Adicionar Refeição
              </button>
            </Dialog.Trigger>
            <CreateMealModal />
          </Dialog.Root>
        </div>

        <div className="mt-5">
          <h3 className="text-xl text-stone-700 dark:text-stone-200">
            18 de fevereiro de 2024
          </h3>

          <table className="mt-2 w-full border-separate border-spacing-y-2">
            <tbody>
              {Array.from({ length: 3 }).map((_, i) => {
                return (
                  <tr
                    className="rounded-lg border border-stone-400 dark:bg-stone-900 dark:text-stone-300"
                    key={i}
                  >
                    <td className="w-30 rounded-l-md border-y border-l  py-4 pl-5 dark:border-stone-800">
                      20:00
                    </td>
                    <td className=" w-30 border-y dark:border-stone-800">
                      Jantar
                    </td>
                    <td className=" border-y text-center dark:border-stone-800">
                      Batata Doce com frango e arroz
                    </td>
                    <td className=" w-30 border-y dark:border-stone-800">
                      Dentro da dieta
                    </td>
                    <td className="w-10 border-y pr-5  text-center dark:border-stone-800">
                      <button className="group flex h-10 w-10 items-center justify-center">
                        <Pencil className="h-4 w-4 text-stone-500 dark:text-stone-400" />
                      </button>
                    </td>
                    <td className="w-10 rounded-r-md border-y border-r pr-5 dark:border-stone-800">
                      <button className="group flex h-10 w-10 items-center justify-center">
                        <Trash2 className="h-4 w-4 text-stone-500 dark:text-stone-400" />
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
