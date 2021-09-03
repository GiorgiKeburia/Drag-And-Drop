"use strict";
var _a;
const exapmle = true;
const e1 = {
    name: 'Giorgi',
    privileges: ['Frontend-Developer'],
    startDate: new Date(),
};
const e2 = {
    name: 'Alexa',
    startDate: new Date(),
};
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = add('2', 4);
const fetchedUserData = {
    id: 'u1',
    name: 'Giorgi',
    job: { title: 'CEO', describtion: 'My own company' },
};
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
const userInput = '';
const storedData = userInput !== null && userInput !== void 0 ? userInput : 'DEFAULT';
console.log(storedData);
function printEmployeeInformation(emp) {
    console.log(`Name: ${emp.name}`);
    if ('privileges' in emp) {
        console.log(`Privilages: ${emp.privileges}`);
    }
    if ('startDate' in emp) {
        console.log(`Start Date: ${emp.startDate}`);
    }
}
printEmployeeInformation(e1);
printEmployeeInformation(e2);
class Car {
    drive() {
        console.log('Driving...');
    }
}
class Truck {
    drive() {
        console.log('Driving a Truck ....');
    }
    loadCarGo(amount) {
        console.log(`Loading carGo... ${amount}`);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCarGo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
    }
    console.log(`Moving Speed: ${speed}`);
}
const bird = {
    type: 'bird',
    flyingSpeed: 5000,
};
const horse = {
    type: 'horse',
    runningSpeed: 8000,
};
moveAnimal(bird);
moveAnimal(horse);
const userInputElement = document.getElementById('user-input');
if (userInputElement) {
    userInputElement.value = 'Hi, there!';
}
const errorBag = {
    email: 'Not a valid Email!',
    username: 'Must start with capital character!',
};
