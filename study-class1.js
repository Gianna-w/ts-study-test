"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/* 类的属性和方法
 *类的继承
 */
var Person = /** @class */ (function () {
    function Person(name, username) {
        this.username = username;
        this.gender = "男"; // protected 只能在当前类及其子类中访问
        this.age = 20;
        this.name = name;
        this.username = username;
    }
    Person.prototype.printAge = function (age) {
        this.age = age;
        // console.log(this.age)
    };
    Person.prototype.printName = function (name) {
        this.name = name;
    };
    Person.prototype.setgender = function (gender) {
        this.gender = gender;
        // console.log(this.gender)
    };
    return Person;
}());
var person1 = new Person("name1", "name2");
// console.log(person1.name, person1.username)
person1.printAge(30);
person1.setgender("男");
// Student 继承Person
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, username, studentId) {
        var _this = _super.call(this, name, username) || this;
        _this.studentId = studentId;
        return _this;
    }
    // 重写父类方法
    Student.prototype.printName = function (name) {
        this.name = name;
        console.log(this.name);
    };
    return Student;
}(Person));
var student1 = new Student("student1", "test", 30111);
console.log(student1, student1.printName("tom"));
