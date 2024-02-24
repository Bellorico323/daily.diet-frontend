import { api } from '../lib/axios'

export interface singInBody {
  email: string
  password: string
}

export async function signIn({ email, password }: singInBody) {
  await api.post('/auth/signin', {
    email,
    password,
  })
}
