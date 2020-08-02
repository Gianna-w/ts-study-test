/* 类的属性和方法
 *类的继承
 */
class Person {
  public name: string
  protected gender: string = "男" // protected 只能在当前类及其子类中访问
  private age: number = 20
  constructor(name: string, public username: string) {
    this.name = name
    this.username = username
  }
  printAge(age: number) {
    this.age = age
    // console.log(this.age)
  }
  printName(name: string) {
    this.name = name
  }
  setgender(gender: string) {
    this.gender = gender
    // console.log(this.gender)
  }
}
const person1 = new Person("name1", "name2")
// console.log(person1.name, person1.username)

person1.printAge(30)
person1.setgender("男")

// Student 继承Person
class Student extends Person {
  studentId: number
  constructor(name: string, username: string, studentId: number) {
    super(name, username)
    this.studentId = studentId
  }
  // 重写父类方法
  printName(name: string) {
    this.name = name
    console.log(this.name)
  }
}
const student1 = new Student("student1", "test", 30111)
console.log(student1, student1.printName("tom"))
