/*
  9989 - Count Element Number To Object
  -------
  by 凤之兮原 (@kongmingLatern) #medium

  ### Question

  With type ``CountElementNumberToObject``, get the number of occurrences of every item from an array and return them in an object. For example:

  ~~~ts
  type Simple1 = CountElementNumberToObject<[]> // return {}
  type Simple2 = CountElementNumberToObject<[1,2,3,4,5]>
  // return {
  //   1: 1,
  //   2: 1,
  //   3: 1,
  //   4: 1,
  //   5: 1
  // }

  type Simple3 = CountElementNumberToObject<[1,2,3,4,5,[1,2,3]]>
  // return {
  //   1: 2,
  //   2: 2,
  //   3: 2,
  //   4: 1,
  //   5: 1
  // }
  ~~~

  > View on GitHub: https://tsch.js.org/9989
*/

/* _____________ Your Code Here _____________ */

type AllFlattenAndPopNever<
  T extends any[], 
  Result extends any[] = []
> = T extends [infer First, ...infer Rest]
  ? [First] extends [never]
    ? AllFlattenAndPopNever<Rest, Result>
    : First extends any[]
      ? AllFlattenAndPopNever<[...First,...Rest],Result>
      : AllFlattenAndPopNever<Rest, [...Result,First]>
  : Result


type CountElementNumberToObject<
  T extends any[], 
  Flattened extends any[] = AllFlattenAndPopNever<T>,
  Result extends Record<any,any> = {}
> = Flattened extends [infer First extends keyof any, ...infer Rest]
  ? [First] extends [keyof Result]
    ? CountElementNumberToObject<T, Rest, {
        [P in keyof Result] : P extends First
          ? [...Result[P], unknown]
          : Result[P]
    }>
    : CountElementNumberToObject<T, Rest, {
        [P in keyof Result] : Result[P]
    } & Record<First,[unknown]>>
  : {
        [P in keyof Result] : Result[P]['length']
    }

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<CountElementNumberToObject<[1, 2, 3, 4, 5]>, {
    1: 1
    2: 1
    3: 1
    4: 1
    5: 1
  } >>,
  Expect<Equal<CountElementNumberToObject<[1, 2, 3, 4, 5, [1, 2, 3]]>, {
    1: 2
    2: 2
    3: 2
    4: 1
    5: 1
  }>>,
  Expect<Equal<CountElementNumberToObject<[1, 2, 3, 4, 5, [1, 2, 3, [4, 4, 1, 2]]]>, {
    1: 3
    2: 3
    3: 2
    4: 3
    5: 1
  }>>,
  Expect<Equal<CountElementNumberToObject<[never]>, {}>>,
  Expect<Equal<CountElementNumberToObject<['1', '2', '0']>, {
    0: 1
    1: 1
    2: 1
  }>>,
  Expect<Equal<CountElementNumberToObject<['a', 'b', ['c', ['d']]]>, {
    'a': 1
    'b': 1
    'c': 1
    'd': 1
  }>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/9989/answer
  > View solutions: https://tsch.js.org/9989/solutions
  > More Challenges: https://tsch.js.org
*/
