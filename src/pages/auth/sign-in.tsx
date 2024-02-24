import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { signIn } from '../../api/sign-in'

const signInSchema = z.object({
  email: z.string(),
  password: z.string(),
})

type SignInInputs = z.infer<typeof signInSchema>

export function SignIn() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<SignInInputs>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: searchParams.get('email') ?? '',
    },
  })

  const { mutateAsync, isSuccess } = useMutation({
    mutationFn: signIn,
  })

  function handleSignInSubmit(data: SignInInputs) {
    try {
      mutateAsync({
        email: data.email,
        password: data.password,
      })
      if (isSuccess) {
        navigate('/')
      }
    } catch {
      toast.error('Erro ao tentar logar o usuário.')
    }

    reset()
  }

  return (
    <>
      <Helmet title="Login" />
      <div className="h-full p-8">
        <div className="flex h-full w-[350px] flex-col items-start justify-center gap-6 ">
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold text-stone-900 dark:text-stone-100">
              Acessar painel
            </h1>
            <p className="text-sm text-stone-500 dark:text-stone-600">
              Acompanhe as suas refeições
            </p>
          </div>

          <form
            className=" flex h-auto w-full flex-col gap-4"
            onSubmit={handleSubmit(handleSignInSubmit)}
          >
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="font-semibold dark:text-stone-100"
              >
                E-mail
              </label>
              <input
                id="email"
                type="text"
                className="h-12 w-full rounded-md border border-stone-300 p-2 text-stone-900 focus:outline-violet-300 focus:ring-4
                focus:ring-violet-100 dark:border-stone-800 dark:bg-stone-900
                dark:text-stone-100"
                autoComplete="off"
                {...register('email')}
              />
            </div>
            <div className="flex flex-col gap-2 dark:text-stone-100">
              <label htmlFor="password" className="font-semibold">
                Senha
              </label>
              <input
                id="password"
                type="password"
                className="h-12 w-full rounded-md border border-stone-300 p-2 text-stone-900 focus:outline-violet-300 focus:ring-4
                focus:ring-violet-100 dark:border-stone-800 dark:bg-stone-900
                dark:text-stone-100"
                {...register('password')}
              />
            </div>
            <button
              type="submit"
              className="mt-2 flex-1 rounded-md bg-stone-800 p-4 text-stone-100 hover:bg-opacity-95 focus:outline-violet-300 focus:ring-4
              focus:ring-violet-100 disabled:cursor-not-allowed disabled:bg-stone-600 dark:bg-violet-800
              "
              disabled={isSubmitting}
            >
              Acessar painel
            </button>
          </form>
          <Link
            to="/sign-up"
            className="rounded-md border-2 border-stone-700 p-3 font-bold text-stone-700 focus:outline-violet-300 focus:ring-4
            focus:ring-violet-100 dark:text-stone-400"
          >
            Criar conta
          </Link>
        </div>
      </div>
    </>
  )
}
