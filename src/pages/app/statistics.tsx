import { ArrowLeft, ThumbsUp } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Statistics() {
  return (
    <div className="h-full">
      <div className="relative flex h-[235px] flex-col items-center justify-center gap-0.5 bg-green-200 dark:bg-green-800">
        <span className="text-4xl font-bold text-green-900 dark:text-green-300">
          90,86%
        </span>
        <span className="text-green-700 dark:text-green-200">
          das refeições dentro da dieta
        </span>
        <span className="flex gap-2 text-green-700 dark:text-green-200">
          Você está indo bem
          <ThumbsUp className="h-5 w-5" />
        </span>

        <Link
          to={'/'}
          className="absolute left-3 top-2 flex items-center justify-center gap-2 text-green-700 dark:text-green-200"
        >
          <ArrowLeft className="h-5 w-5" />
          voltar
        </Link>
      </div>

      <div className="h-full ">
        <h1 className="mt-10 px-10 text-xl font-semibold text-stone-900 dark:text-stone-100">
          Estatisticas gerais:
        </h1>

        <div className="mt-10  grid h-auto grid-cols-2 gap-4 px-10">
          {Array.from({ length: 4 }).map((_, i) => {
            return (
              <div
                className="flex  h-[200px]  flex-col items-center justify-center rounded-md bg-stone-200 dark:bg-stone-900"
                key={i}
              >
                <span className="text-2xl font-semibold text-stone-700 dark:text-stone-300">
                  22
                </span>
                <span className=" text-stone-700 dark:text-stone-300">
                  melhor sequência de pratos dentro da dieta
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
