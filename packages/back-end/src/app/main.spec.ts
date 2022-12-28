export const add = (a: number, b: number) => a + b

test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 7)).toBe(9)
})
