// const userName = "Giorgi"

// let age = 30

// console.log(age)

// let result;

// function add(a: number, b: number) {
//     result = a + b
//     return result
// }
// console.log(add(10, 30))

// if (age>20) {
//     let isOld = true
// }
// console.log(isOld)

// const add = (a: number, b: number = 1) => a + b

// const printOutput: (a: number | string) => void = output => console.log(output)

// const button = document.querySelector('button')

// if (button) {
//     button.addEventListener('click', event => console.log(event))
// }

// printOutput(add(89))

const hobbies = ['sports', "cooking", "dance", "skiting "];
const activeHobbies = ['Hiking', ...hobbies]

const person = {
    firstName: "Giorgi",
    age: 30,
    lastName: "Keburia"
}

const copiedPerson = { ...person }

const add = (...numbers: number[]) => {
    let result: number = 0;
    numbers.forEach((e) => {
        result += e
    })
    return result;
}
console.log(add(3, 4, 22, 2))

const [hobby1, hobby2, ...remainigHobbies] = hobbies;
const { lastName: gvari } = person; 
console.log(gvari)