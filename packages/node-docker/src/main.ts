import { initTRPC } from '@trpc/server'
import { fibonacciInput } from '@myOrg/node-lib'
import { fibonacci } from './app'

const t = initTRPC.create()

export const appRouter = t.router({
    fibonacci: t.procedure.input(fibonacciInput).query(({ input }) => {
        return {
            output: fibonacci(input.n)
        }
    })
})

export type AppRouter = typeof appRouter
