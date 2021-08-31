// const person: {
//     name: string;
//     age: number;
// }

enum Role { ADMIN, READ_ONLY, AUTHOR }

const person = {
    name: "Maxim",
    age: 30,
    myArr: ['Giorgi', 'Keburia'],
    role: Role.ADMIN
}

let myArr: string[];

// for(const value of person.myArr){
//     console.log(value)
// }
if (person.role === Role.ADMIN) {
    console.log("Allowed! ")
}else{
    console.log("Request denied! ")
}