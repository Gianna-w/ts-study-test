/**
 * set/get 设置/获取私有属性
 * static  静态属性和方法 可直接由类名调用
 */
class People {
  private _name: string = "jie"
  set setName(value: string) {
    this._name = value
  }
  get getName() {
    return this._name
  }

  static PI: number = 3.14
  static circle(value: number) {
    return value * this.PI
  }
}

const people1 = new People()
console.log(people1.getName)
people1.setName = "jie wang"
console.log(people1.getName)
console.log(People.PI)
console.log(People.circle(2))
