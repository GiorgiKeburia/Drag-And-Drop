interface Greetable {
  name: string;
  age: number;

  greet(phrase: string): void;
  describe(describe: string):void;
}

class Person implements Greetable{
    constructor(public name: string, public age: number){};

    greet(phrase: string){
        console.log(`${phrase} : ${this.name}`);
    }
    describe(describe: string){
        console.log(describe);
    }
}

let user1: Greetable;

user1 = {
    name:"Giorgi",
    age: 20,

    greet(phrase:string){
        console.log(`${phrase} : ${this.name}`);
    },

    describe(describe: string){
        console.log("object");
    }
};

user1.greet("Heloo my name is")
user1.describe("This is interface OBJ")
