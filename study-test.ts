// 数字类型
let num = 25
// let num: number = 25
// num = 'abc' // 不能储存非原有的类型数据

// 布尔类型
let isLogin = false
// let isLogin:boolean = false
// 只能更改为true or false

// 字符串类型
let str: string = "helll world"

// 不确定类型时,尽量不使用
let anything
anything = 25
anything = "abc"

// 数组
let names: Array<string> = ["a", "b", "c"]
let numbers: number[] = [1, 2, 3]
let anyArray: any[] = [1, "a"]

// 元组
let styles: [string, number] = ["red", 1]

// 枚举 enum
enum Color {
  Black,
  Yellow = 100,
  Red,
}
let myBlack: Color = Color.Black
let myYellow: Color = Color.Yellow
let myRed: Color = Color.Red
console.log(myBlack, myYellow, myRed) // 0 100 101

// 函数
// 返回值类型
function returnVal(): string {
  return "abc"
}
// 空返回值
function sayHello(): void {
  console.log("hello")
}
// 参数返回值
function sumVal(val1: number, val2: number) {
  return val1 + val2
}
// 函数类型
let myFunc: (a: number, b: number) => number //参数是number，返回值也是number

// object类型
let dataObj: { name: string; age: number } = {
  name: "test",
  age: 31,
}
dataObj = {
  name: "hello",
  age: 12,
}
// 复杂对象
let complex: { data: number[]; myFunc: (item: number) => number[] } = {
  data: [1, 2, 3],
  myFunc: function (item: number): number[] {
    this.data.push(item)
    return this.data
  },
}
console.log(complex.myFunc(20)) //[1,2,3,20]

// type生成类型 自定义type
type myType = { data: number[]; myFunc: (item: number) => number[] }
let complex2: myType = {
  data: [1, 2, 3],
  myFunc: function (item: number): number[] {
    this.data.push(item)
    return this.data
  },
}

// union type
let unionType: number | string | boolean
unionType = 12
unionType = "abc"
unionType = false

// 检查类型
let checkType = 10
if (typeof checkType === "number") console.log("number")

// null和undefined
let myNull = 12
// myNull = null  // it is error when strict is true
// myNull = undefined  // it is error when strict is true
let myNull2 = null
myNull2 = undefined // it is allowed

/* never
 * 1never是任何类型的子类型，也可以赋值给任何类型。
 * 2但没有类型是never的子类型，任何类型也不能赋值给never(除了never本身)。
 * 3应用场景：抛出异常
 */
let y: number
y = (() => {
  throw new Error("出错啦")
})() //1的验证
let x: never
// x=12  // 2的验证，会报错
function error(message: string): never {
  throw new Error(message)
} // 3的应用
