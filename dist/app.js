"use strict";
let a = 1;
let b = "ewe";
const note = ["12", 12, { a: 123, b: 345 }];
function sayHello(message) {
    console.log(message);
}
sayHello("Hello");
const throwError = (message) => {
    throw new Error(message);
};
throwError("Hello");
const login = "admin";
const rect = {
    id: 12,
    size: {
        width: 12,
        height: 12,
    }
};
rect.size.width = 10;
const rect1 = {
    id: 123,
    size: {
        width: 43,
        height: 56,
    },
    getArea() {
        return this.size.height + this.size.width;
    }
};
function funct1(a) {
    return a;
}
const css = {
    border: ""
};
//==================================
var Prod;
(function (Prod) {
    Prod[Prod["Sim"] = 0] = "Sim";
    Prod[Prod["Standart"] = 1] = "Standart";
    Prod[Prod["NoStandart"] = 2] = "NoStandart";
})(Prod || (Prod = {}));
const Primer = {
    v: "",
    x: 12,
    z: 4
};
