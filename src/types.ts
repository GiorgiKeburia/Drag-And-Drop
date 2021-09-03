type Admin = {
	name: string;
	privileges: string[];
};

type Employee = {
	name: string;
	startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

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

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: Combinable, b: Combinable) {
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

console.log(fetchedUserData?.job?.title);

const userInput = '';
const storedData = userInput ?? 'DEFAULT';
console.log(storedData);

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

interface Bird {
	type: 'bird';
	flyingSpeed: number;
}

interface Horse {
	type: 'horse';
	runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
	let speed: number;
	switch (animal.type) {
		case 'bird':
			speed = animal.flyingSpeed;
			break;
		case 'horse':
			speed = animal.runningSpeed;
	}
	console.log(`Moving Speed: ${speed}`);
}

const bird: Bird = {
	type: 'bird',
	flyingSpeed: 5000,
};

const horse: Horse = {
	type: 'horse',
	runningSpeed: 8000,
};

moveAnimal(bird);
moveAnimal(horse);

const userInputElement = document.getElementById('user-input');

if (userInputElement) {
	(userInputElement as HTMLInputElement).value = 'Hi, there!';
}

interface ErrorContainer {
	[prop: string]: string;
}

const errorBag: ErrorContainer = {
	email: 'Not a valid Email!',
	username: 'Must start with capital character!',
};
