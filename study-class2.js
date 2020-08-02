"use strict";
/**
 * set/get 设置/获取私有属性
 * static  静态属性和方法 可直接由类名调用
 */
var People = /** @class */ (function () {
    function People() {
        this._name = "jie";
    }
    Object.defineProperty(People.prototype, "setName", {
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(People.prototype, "getName", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    People.circle = function (value) {
        return value * this.PI;
    };
    People.PI = 3.14;
    return People;
}());
var people1 = new People();
console.log(people1.getName);
people1.setName = "jie wang";
console.log(people1.getName);
console.log(People.PI);
console.log(People.circle(2));
