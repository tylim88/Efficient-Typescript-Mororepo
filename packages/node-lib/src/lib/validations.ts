import { z } from 'zod'

export const fibonacciInput = z.object({ input: z.string() })
