"use strict";
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
