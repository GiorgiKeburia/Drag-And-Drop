"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet(phrase) {
        console.log(`${phrase} : ${this.name}`);
    }
    describe(describe) {
        console.log(describe);
    }
}
let user1;
user1 = {
    name: "Giorgi",
    age: 20,
    greet(phrase) {
        console.log(`${phrase} : ${this.name}`);
    },
    describe(describe) {
        console.log("object");
    },
};
console.log(user1.name);
user1.greet("Heloo my name is");
user1.describe("This is interface OBJ");
let add;
add = (n1, n2) => {
    return n1 + n2;
};
console.log(add(2, 3));
