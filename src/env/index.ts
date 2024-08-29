import 'dotenv/config'
import { z } from 'zod'

//process.env: { NODE_ENV: 'dev' } - por isso valida um objeto

const envSchema = z.object({
    NODE_ENV: z.enum(['dev', 'test', 'production']).default('dev'), //caso n seja informada o valor default e dev
    PORT: z.coerce.number().default(3333) //converte o valor vindo para number 
})
                    //safeparse vai checar se os dados veio correto e returnar o sucess
const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
    console.error('Invalid environment variables', _env.error.format())

    throw new Error('Invalid environment variables')
}