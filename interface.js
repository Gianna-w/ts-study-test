"use strict";
// 类实现接口（一个类可实现多个接口）
var NewPerson = /** @class */ (function () {
    function NewPerson() {
        this.name = "jie";
        this.age = 24;
        this.custom = "自定义";
        this.id = 101;
        this.course = "math";
    }
    return NewPerson;
}());
var newperson1 = new NewPerson();
console.log(newperson1.name);
var employee = {
    name: "jier",
    age: 10,
    custome: "自定义",
    work: "工人",
};
console.log(employee.work, employee.name);
