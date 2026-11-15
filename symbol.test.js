import { expect, test } from 'vitest'

const sym = Symbol('sym')

test('toMatchObject should fail when a symbol key value differs', () => {
  expect(() => expect({ [sym]: 1, a: 1 }).toMatchObject({ [sym]: 2 })).toThrow()
})

test('toMatchObject should fail when a symbol key is missing', () => {
  expect(() => expect({ a: 1 }).toMatchObject({ [sym]: 1 })).toThrow()
})

test('toEqual already fails for the same values (for comparison)', () => {
  expect(() => expect({ [sym]: 1 }).toEqual({ [sym]: 2 })).toThrow()
})
