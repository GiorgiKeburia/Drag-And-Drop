type Admin = {
	name: string;
	privileges: string[];
};

type Employee = {
	name: string;
	startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;
type UnknownEmployee = Employee | Admin;

const exapmle: Numeric = true;

const e1: ElevatedEmployee = {
	name: 'Giorgi',
	privileges: ['Frontend-Developer'],
	startDate: new Date(),
};
const e2: Employee = {
	name: 'Alexa',
	startDate: new Date(),
};
function add(a: Combinable, b: Combinable) {
	if (typeof a === 'string' || typeof b === 'string') {
		return a.toString() + b.toString();
	}
	return a + b;
}

function printEmployeeInformation(emp: UnknownEmployee) {
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

	loadCarGo(amount: number) {
		console.log(`Loading carGo... ${amount}`);
	}
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
	vehicle.drive();
	if (vehicle instanceof Truck) {
		vehicle.loadCarGo(1000);
	}
}
useVehicle(v1);
useVehicle(v2);
