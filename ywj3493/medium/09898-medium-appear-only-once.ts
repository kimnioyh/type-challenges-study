/*
  9898 - Appear only once
  -------
  by X.Q. Chen (@brenner8023) #보통

  ### 질문

  Find the elements in the target array that appear only once. For example：input: `[1,2,2,3,3,4,5,6,6,6]`，ouput: `[1,4,5]`.

  > GitHub에서 보기: https://tsch.js.org/9898/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

type IsEqual<X, Y> = (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? true : false;

type Has<T extends any[], U> = T extends [infer F, ...infer R] ? IsEqual<F, U> extends true ? true : Has<R, U> : false;

type EleminateElement<T extends any[], U, C extends any[] = []> = T extends [infer F, ...infer R] ? IsEqual<F, U> extends true ? EleminateElement<R, U, C> : EleminateElement<R, U, [...C, F]> : C;

type EleminateElementTest = EleminateElement<[1,2,3], 0>

type FindEles<T extends any[], U extends any[] = [], C extends any[] = []> = T extends [infer F, ...infer R] ?
  Has<U, F> extends true ? 
    FindEles<R, [...U, F], EleminateElement<C, F>> :
    FindEles<R, [...U, F], [...C, F]> :
  C;

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<FindEles<[1, 2, 2, 3, 3, 4, 5, 6, 6, 6]>, [1, 4, 5]>>,
  Expect<Equal<FindEles<[2, 2, 3, 3, 6, 6, 6]>, []>>,
  Expect<Equal<FindEles<[1, 2, 3]>, [1, 2, 3]>>,
  Expect<Equal<FindEles<[1, 2, number]>, [1, 2, number]>>,
  Expect<Equal<FindEles<[1, 2, number, number]>, [1, 2]>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/9898/answer/ko
  > 정답 보기: https://tsch.js.org/9898/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/
