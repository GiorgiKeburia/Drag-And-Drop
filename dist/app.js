"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    ;
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
    }
};
user1.greet("Heloo my name is");
user1.describe("This is interface OBJ");
