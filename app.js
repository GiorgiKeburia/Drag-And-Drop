// const person: {
//     name: string;
//     age: number;
// }
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: "Maxim",
    age: 30,
    myArr: ['Giorgi', 'Keburia'],
    role: Role.ADMIN
};
var myArr;
// for(const value of person.myArr){
//     console.log(value)
// }
if (person.role === Role.ADMIN) {
    console.log("It is read User");
}
else {
    console.log("Request denied");
}
