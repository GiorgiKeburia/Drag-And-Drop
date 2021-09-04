const names: Array<string> = [];

const promise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('This is done!');
	}, 2000);
});

const O1 = {
	firstName: 'Giorgi',
	lastName: 'Keburia',
};
const O2 = {
	ownerName: 'Menges',
	ownerLastName: 'Delpiero',
};

function merge<T extends object, U extends object>(objA: T, objB: U) {
	return Object.assign(objA, objB);
}

const mergedObj = merge(O1, O2);
mergedObj.firstName;

interface Lengthy {
	length: number;
}

function countAndPrint<T extends Lengthy>(element: T): [T, string] {
	let descriptionText = 'Got no value.';
	if (element.length === 1) {
		descriptionText = `Got 1 element.`;
	}
	if (element.length > 0) {
		descriptionText = `Got ${element.length} elements.`;
	}
	return [element, descriptionText];
}

console.log(countAndPrint(['ss']));

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
	return obj[key];
}

console.log(extractAndConvert(O1, 'firstName'));

class DataStorage<T extends number | string | boolean> {
	private data: T[] = [];

	addItem(item: T) {
		this.data.push(item);
	}

	removeItem(item: T) {
		if (this.data.indexOf(item) === -1) {
			return;
		}
		this.data.splice(this.data.indexOf(item), 1);
	}

	getItems() {
		return [...this.data];
	}
}

const textStorage = new DataStorage<string>();
textStorage.addItem('user12212');
textStorage.addItem('user12sdsd2');
textStorage.addItem('user122782');

const numStorage = new DataStorage<number>();
numStorage.addItem(12);
numStorage.addItem(122);
numStorage.addItem(889);

interface CourseGoal {
	title: string;
	describtion: string;
	complateUntil: Date;
}

function createCourseGoal(title: string, describtion: string, date: Date): CourseGoal {
	let courseGoal: Partial<CourseGoal> = {};
	courseGoal.title = title;
	courseGoal.describtion = describtion;
	courseGoal.complateUntil = date;

	return courseGoal as CourseGoal;
}

const namesArr: Readonly<string[]> = ['Giorgi', 'Levana'];
