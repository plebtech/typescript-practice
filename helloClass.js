"use strict";
var MyClass = /** @class */ (function () {
    function MyClass(name) {
        this.name = name;
    }
    MyClass.prototype.getName = function () {
        return this.name;
    };
    return MyClass;
}());
var myClass = new MyClass('Nick');
console.log('hello ' + myClass.getName() + '!');
