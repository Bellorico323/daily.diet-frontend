import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { signUp } from '../../api/sign-up'

const signUpSchema = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string(),
})

type SignupInputs = z.infer<typeof signUpSchema>

export function SignUp() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<SignupInputs>({
    resolver: zodResolver(signUpSchema),
  })

  const { mutateAsync } = useMutation({
    mutationFn: signUp,
  })

  function handleSignUpSubmit(data: SignupInputs) {
    try {
      mutateAsync({
        name: data.name,
        email: data.email,
        password: data.password,
      })

      toast.success('Usuário cadastrado com sucesso!', {
        action: {
          label: 'Login',
          onClick: () => navigate(`/sign-in?email=${data.email}`),
        },
      })
    } catch {
      toast.error('Erro ao cadastrar o usuário.')
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
              Criar conta
            </h1>
            <p className="text-sm text-stone-500 dark:text-stone-600">
              Comece a acompanhar as suas refeições.
            </p>
          </div>

          <form
            className=" flex h-auto w-full flex-col gap-4"
            onSubmit={handleSubmit(handleSignUpSubmit)}
          >
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="font-semibold text-stone-900 dark:text-stone-100"
              >
                Nome
              </label>
              <input
                id="name"
                type="text"
                className="h-12 w-full rounded-md border border-stone-300 p-2 text-stone-900 focus:outline-violet-300 focus:ring-4
                focus:ring-violet-100 dark:border-stone-800 dark:bg-stone-900
                dark:text-stone-100"
                autoComplete="off"
                {...register('name')}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="font-semibold text-stone-900 dark:text-stone-100"
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
            <div className="flex flex-col gap-2">
              <label
                htmlFor="password"
                className="font-semibold text-stone-900 dark:text-stone-100"
              >
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
              Se cadastrar
            </button>
            <p className="px-6 text-center text-sm leading-relaxed text-stone-900 dark:text-stone-400">
              Ao continuar, você concorda com os nossos{' '}
              <a href="" className="underline underline-offset-4">
                Termos de serviço
              </a>{' '}
              e{' '}
              <a href="" className="underline underline-offset-4">
                políticas de privacidade
              </a>
              .
            </p>
          </form>
          <Link
            to="/sign-in"
            className="rounded-md border-2 border-stone-700 p-3 font-bold text-stone-700 focus:outline-violet-300 focus:ring-4
            focus:ring-violet-100 dark:text-stone-400"
          >
            Fazer login
          </Link>
        </div>
      </div>
    </>
  )
}
