// 1. 已知有一个类型A有属性x和y，要求扩展A得到一个新的类型B，要求删除A里面的x，同时添加属性z，如何实现？interface A {  x: number  y?: string}
// code here...
interface A {
  x: number,
  y?: string
}

type B = Omit<A, 'x'> & { z: number }

// 那么Omit 是如何实现的

type MyOmit<T, K extends keyof T> = {
  [key in keyof T as key extends K ? never : key ]: T[key]
}

type C1 =  MyOmit<A, 'y'>
const test1: C1 = {x: 1}

// 同理pick 实现
type MyPick<T, K extends keyof T> = {
  [key in keyof T as key extends K ? key : never] : T[key]
}

type C2 = MyPick<A, 'x'>
const test2: C2 = {x: 2}



// 2.还是上面的类型A，仍然是扩展它得到类型C，要求把A里面的属性全部变成可选的，如何实现？
// ...

interface C extends Partial<A> {
  c?: string
}

const a: C = {x: 1, y: 'aa'}

// 那partial如何实现
type MyPartial<T> =  {
  [key in keyof T]? : T[key]
}

type T3 = MyPartial<A>
// interface T3 extends MyPartial<A>  {
// }
const test3: T3 =  {x: 1}
const test4: T3 =  {y: 'test'}

//3. 已知有一个函数类型 type D = function(x: number, y?: string) => string，要求获取D的第一个参数的类型，如何实现？

// 考查的是inter 推断的语法
type D = (x: number, y?: string) => string

type ParameterZero<T> = T extends (...args: infer P) => any ? P[0] : never

type Zero = ParameterZero<D>

const test5: Zero = 1


