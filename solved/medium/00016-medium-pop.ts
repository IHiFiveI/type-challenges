/*
  16 - Pop
  -------
  by Anthony Fu (@antfu) #medium #array

  ### Question

  > TypeScript 4.0 is recommended in this challenge

  Implement a generic `Pop<T>` that takes an Array `T` and returns an Array without it's last element.

  For example

  ```ts
  type arr1 = ['a', 'b', 'c', 'd']
  type arr2 = [3, 2, 1]

  type re1 = Pop<arr1> // expected to be ['a', 'b', 'c']
  type re2 = Pop<arr2> // expected to be [3, 2]
  ```

  **Extra**: Similarly, can you implement `Shift`, `Push` and `Unshift` as well?

  > View on GitHub: https://tsch.js.org/16
*/

/* _____________ Your Code Here _____________ */

// I was cringe but i was free

// type Pop<T extends any[]> = ['fake-element', ...T][T['length']] extends infer TLast ? Exclude<T[number], TLast> : never
// type Pop<T extends any[]> = ['fake-element', ...T] extends infer TArrayWithFakeFirst
//   ? {
//       [Key in keyof TArrayWithFakeFirst]: Key extends `${T['length']}`
//         ? never
//         : TArrayWithFakeFirst[Key] extends 'fake-element'
//           ? never
//           : TArrayWithFakeFirst[Key];
//     } extends infer TArrayWithNever ? TArrayWithNever : never
//   : never

type Pop<T extends any[]> = 0 extends T['length']
  ? []
  : T extends [...infer First, infer Last]
    ? First
    : never

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Pop<[3, 2, 1]>, [3, 2]>>,
  Expect<Equal<Pop<['a', 'b', 'c', 'd']>, ['a', 'b', 'c']>>,
  Expect<Equal<Pop<[]>, []>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/16/answer
  > View solutions: https://tsch.js.org/16/solutions
  > More Challenges: https://tsch.js.org
*/
