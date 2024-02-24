import { api } from '../lib/axios'

export interface singUpBody {
  name: string
  email: string
  password: string
}

export async function signUp({ name, email, password }: singUpBody) {
  await api.post('/auth/signup', {
    name,
    email,
    password,
  })
}
