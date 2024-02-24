import { zodResolver } from '@hookform/resolvers/zod'
import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'
import { X } from 'lucide-react'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'

import { useTheme } from '../../../contexts/ThemeContext'

const newMealSchema = z.object({
  name: z.string(),
  description: z.string(),
  mealHour: z.string(),
  type: z.enum(['inDiet', 'outDiet']),
})

type NewMealInputs = z.infer<typeof newMealSchema>

export function CreateMealModal() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    control,
    reset,
  } = useForm<NewMealInputs>({
    resolver: zodResolver(newMealSchema),
  })

  function handleCreateNewMeal(data: NewMealInputs) {
    console.log(data)
    reset()
  }

  const { darkMode } = useTheme()

  return (
    <Dialog.Portal container={document.getElementById('root')}>
      <Dialog.Overlay
        className={`data-[state=open]:animate-overlayShow fixed inset-0 bg-black bg-opacity-75 ${darkMode}`}
      />

      <Dialog.Content
        className={`className="data-[state=open]:animate-contentShow focus:outline-none" fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-md bg-stone-50 p-[25px] dark:bg-stone-950 ${darkMode}`}
      >
        <Dialog.Title className="mb-5 text-lg font-bold text-stone-800 dark:text-stone-100">
          Adicionar Refeição
        </Dialog.Title>
        <Dialog.Close asChild>
          <button
            className="absolute right-[10px] top-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full text-stone-900 focus:outline-none dark:text-stone-100"
            aria-label="Close"
          >
            <X />
          </button>
        </Dialog.Close>
        <form
          className="space-y-5"
          onSubmit={handleSubmit(handleCreateNewMeal)}
        >
          <div>
            <label htmlFor="name" className="font-semibold dark:text-stone-100">
              Nome
            </label>
            <input
              id="name"
              type="text"
              className=" mt-2 h-12 w-full rounded-md border border-stone-300 p-2 text-stone-900 focus:outline-violet-300
      focus:ring-4 focus:ring-violet-100 dark:border-stone-800
      dark:bg-stone-900 dark:text-stone-100"
              autoComplete="off"
              {...register('name')}
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="font-semibold dark:text-stone-100"
            >
              Descrição
            </label>
            <textarea
              id="description"
              className="mt-2 h-24 w-full rounded-md border border-stone-300 p-2 text-stone-900 focus:outline-violet-300
      focus:ring-4 focus:ring-violet-100 dark:border-stone-800
      dark:bg-stone-900 dark:text-stone-100"
              {...register('description')}
            />
          </div>

          <div>
            <label
              htmlFor="datetime"
              className="font-semibold dark:text-stone-100"
            >
              Date e hora
            </label>
            <input
              id="datetime"
              type="datetime-local"
              className=" mt-2 h-12 w-full rounded-md border border-stone-300 p-2 text-stone-900 focus:outline-violet-300
      focus:ring-4 focus:ring-violet-100 dark:border-stone-800
      dark:bg-stone-900 dark:text-stone-100"
              autoComplete="off"
              {...register('mealHour')}
            />
          </div>
          <div>
            <label
              htmlFor="indiet"
              className="font-semibold dark:text-stone-100"
            >
              Está dentro da dieta?
            </label>

            <Controller
              control={control}
              name="type"
              render={({ field }) => {
                return (
                  <RadioGroup.Root
                    className="mt-2 grid grid-cols-2 gap-2"
                    onValueChange={field.onChange}
                    value={field.value}
                  >
                    <RadioGroup.Item
                      value="inDiet"
                      id="indiet"
                      className="rounded-md border-2 border-transparent  bg-stone-100 p-2 font-semibold text-stone-800 focus:outline-violet-300 focus:ring-4 focus:ring-violet-100 data-[state=checked]:bg-green-400
                  data-[state=checked]:text-green-900 data-[state=unchecked]:hover:bg-stone-200 dark:bg-stone-800 dark:text-stone-200
                  dark:data-[state=checked]:bg-green-800 dark:data-[state=checked]:text-green-100  dark:data-[state=unchecked]:hover:bg-stone-800"
                    >
                      Sim
                    </RadioGroup.Item>
                    <RadioGroup.Item
                      value="outDiet"
                      className="rounded-md  border-2 border-transparent bg-stone-100 p-2 font-semibold text-stone-800 focus:outline-violet-300 focus:ring-4  focus:ring-violet-100 data-[state=checked]:bg-red-400 data-[state=checked]:text-red-900 data-[state=unchecked]:hover:bg-stone-200 dark:bg-stone-800 dark:text-stone-200
                      dark:data-[state=checked]:bg-red-800 dark:data-[state=checked]:text-red-100  dark:data-[state=unchecked]:hover:bg-stone-800
                      "
                    >
                      Não
                    </RadioGroup.Item>
                  </RadioGroup.Root>
                )
              }}
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-stone-900 p-3 text-stone-100 focus:outline-violet-300
          focus:ring-4 focus:ring-violet-100 dark:bg-violet-800 dark:text-stone-100"
            disabled={isSubmitting}
          >
            Cadastrar refeição
          </button>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
