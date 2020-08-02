// 接口
interface PeopleInterface {
  readonly name: string // 只读
  age: number // 必须
  sex?: string // 可选
  [propName: string]: any // 自定义
}
interface StudentInterface {
  id: number
  course: string
}

// 类实现接口（一个类可实现多个接口）
class NewPerson implements PeopleInterface, StudentInterface {
  name: string = "jie"
  age: number = 24
  custom: string = "自定义"
  id: number = 101
  course: string = "math"
}
const newperson1 = new NewPerson()
console.log(newperson1.name)

// 接口继承
interface Employee extends PeopleInterface {
  work: string
}
const employee: Employee = {
  name: "jier",
  age: 10,
  custome: "自定义",
  work: "工人",
}
console.log(employee.work, employee.name)
