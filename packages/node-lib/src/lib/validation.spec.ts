import { fibonacciInput } from './validations'

// Note: These are just examples, in reality, you should not test zod validation, those are zod's responsibilities
describe('validations', () => {
    it('test fail case', () => {
        expect(() => fibonacciInput.parse({ n: 'a' })).toThrow()
    })

    it('test pass case', () => {
        expect(() => fibonacciInput.parse({ n: 1 })).not.toThrow()
    })
})
