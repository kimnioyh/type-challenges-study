/*
  8767 - Combination
  -------
  by Homyee King (@HomyeeKing) #보통 #array #application #string

  ### 질문

  Given an array of strings, do Permutation & Combination.
  It's also useful for the prop types like video [controlsList](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/controlsList)

  ```ts
  // expected to be `"foo" | "bar" | "baz" | "foo bar" | "foo bar baz" | "foo baz" | "foo baz bar" | "bar foo" | "bar foo baz" | "bar baz" | "bar baz foo" | "baz foo" | "baz foo bar" | "baz bar" | "baz bar foo"`
  type Keys = Combination<['foo', 'bar', 'baz']>
  ```

  > GitHub에서 보기: https://tsch.js.org/8767/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

type Combination<T extends string[], UnionT = T[number], Possible = UnionT> = 
  Possible extends string
    ? Possible | `${Possible} ${Combination<[], Exclude<UnionT, Possible>>}`
    : never

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Combination<['foo', 'bar', 'baz']>, 'foo' | 'bar' | 'baz' | 'foo bar' | 'foo bar baz' | 'foo baz' | 'foo baz bar' | 'bar foo' | 'bar foo baz' | 'bar baz' | 'bar baz foo' | 'baz foo' | 'baz foo bar' | 'baz bar' | 'baz bar foo'>>,
  Expect<Equal<Combination<['apple', 'banana', 'cherry']>, 'apple' | 'banana' | 'cherry' |
  'apple banana' | 'apple cherry' | 'banana apple' | 'banana cherry' | 'cherry apple' | 'cherry banana' |
  'apple banana cherry' | 'apple cherry banana' | 'banana apple cherry' | 'banana cherry apple' | 'cherry apple banana' | 'cherry banana apple'>>,
  Expect<Equal<Combination<['red', 'green', 'blue', 'yellow']>, 'red' | 'green' | 'blue' | 'yellow' |
  'red green' | 'red blue' | 'red yellow' | 'green red' | 'green blue' | 'green yellow' | 'blue red' | 'blue green' | 'blue yellow' | 'yellow red' | 'yellow green' | 'yellow blue' |
  'red green blue' | 'red green yellow' | 'red blue green' | 'red blue yellow' | 'red yellow green' | 'red yellow blue' |
  'green red blue' | 'green red yellow' | 'green blue red' | 'green blue yellow' | 'green yellow red' | 'green yellow blue' |
  'blue red green' | 'blue red yellow' | 'blue green red' | 'blue green yellow' | 'blue yellow red' | 'blue yellow green' |
  'yellow red green' | 'yellow red blue' | 'yellow green red' | 'yellow green blue' | 'yellow blue red' | 'yellow blue green' |
  'red green blue yellow' | 'red green yellow blue' | 'red blue green yellow' | 'red blue yellow green' | 'red yellow green blue' | 'red yellow blue green' |
  'green red blue yellow' | 'green red yellow blue' | 'green blue red yellow' | 'green blue yellow red' | 'green yellow red blue' | 'green yellow blue red' |
  'blue red green yellow' | 'blue red yellow green' | 'blue green red yellow' | 'blue green yellow red' | 'blue yellow red green' | 'blue yellow green red' |
  'yellow red green blue' | 'yellow red blue green' | 'yellow green red blue' | 'yellow green blue red' | 'yellow blue red green' | 'yellow blue green red'>>
  ,
  Expect<Equal<Combination<['one', 'two']>, 'one' | 'two' |
  'one two' | 'two one'>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/8767/answer/ko
  > 정답 보기: https://tsch.js.org/8767/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/
