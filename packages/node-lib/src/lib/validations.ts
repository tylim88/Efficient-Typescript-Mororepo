import { z } from 'zod'

export const fibonacciInput = z.object({ n: z.number() })
