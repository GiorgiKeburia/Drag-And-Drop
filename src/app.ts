interface AddFn {
  (a: number, b: number): number;
}

interface Named {
  readonly name: string;
  outputName?: string
}

interface Greetable extends Named {
  readonly name: string;
  age: number;

  greet(phrase: string): void;
  describe(describe: string): void;
}

class Person implements Greetable {
  constructor(public name: string, public age: number) {}

  greet(phrase: string) {
    console.log(`${phrase} : ${this.name}`);
  }
  describe(describe: string) {
    console.log(describe);
  }
}

let user1: Greetable;

user1 = {
  name: "Giorgi",
  age: 20,

  greet(phrase: string) {
    console.log(`${phrase} : ${this.name}`);
  },

  describe(describe: string) {
    console.log("object");
  },
};
console.log(user1.name);
user1.greet("Heloo my name is");
user1.describe("This is interface OBJ");

let add: AddFn;
add = (n1: number, n2: number) => {
    return n1 + n2
};

console.log(add(2,3));