"use strict";
// 数字类型
var num = 25;
// let num: number = 25
// num = 'abc' // 不能储存非原有的类型数据
// 布尔类型
var isLogin = false;
// let isLogin:boolean = false
// 只能更改为true or false
// 字符串类型
var str = "helll world";
// 不确定类型时,尽量不使用
var anything;
anything = 25;
anything = "abc";
// 数组
var names = ["a", "b", "c"];
var numbers = [1, 2, 3];
var anyArray = [1, "a"];
// 元组
var styles = ["red", 1];
// 枚举 enum
var Color;
(function (Color) {
    Color[Color["Black"] = 0] = "Black";
    Color[Color["Yellow"] = 100] = "Yellow";
    Color[Color["Red"] = 101] = "Red";
})(Color || (Color = {}));
var myBlack = Color.Black;
var myYellow = Color.Yellow;
var myRed = Color.Red;
console.log(myBlack, myYellow, myRed); // 0 100 101
// 函数
// 返回值类型
function returnVal() {
    return "abc";
}
// 空返回值
function sayHello() {
    console.log("hello");
}
// 参数返回值
function sumVal(val1, val2) {
    return val1 + val2;
}
// 函数类型
var myFunc; //参数是number，返回值也是number
// object类型
var dataObj = {
    name: "test",
    age: 31,
};
dataObj = {
    name: "hello",
    age: 12,
};
// 复杂对象
var complex = {
    data: [1, 2, 3],
    myFunc: function (item) {
        this.data.push(item);
        return this.data;
    },
};
console.log(complex.myFunc(20)); //[1,2,3,20]
var complex2 = {
    data: [1, 2, 3],
    myFunc: function (item) {
        this.data.push(item);
        return this.data;
    },
};
// union type
var unionType;
unionType = 12;
unionType = "abc";
unionType = false;
// 检查类型
var checkType = 10;
if (typeof checkType === "number")
    console.log("number");
// null和undefined
var myNull = 12;
// myNull = null  // it is error when strict is true
// myNull = undefined  // it is error when strict is true
var myNull2 = null;
myNull2 = undefined; // it is allowed
/* never
 * 1never是任何类型的子类型，也可以赋值给任何类型。
 * 2但没有类型是never的子类型，任何类型也不能赋值给never(除了never本身)。
 * 3应用场景：抛出异常
 */
var y;
y = (function () {
    throw new Error("出错啦");
})(); //1的验证
var x;
// x=12  // 2的验证，会报错
function error(message) {
    throw new Error(message);
} // 3的应用
