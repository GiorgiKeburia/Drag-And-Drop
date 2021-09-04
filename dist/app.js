"use strict";
const names = [];
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
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge(O1, O2);
mergedObj.firstName;
function countAndPrint(element) {
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
function extractAndConvert(obj, key) {
    return obj[key];
}
console.log(extractAndConvert(O1, 'firstName'));
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('user12212');
textStorage.addItem('user12sdsd2');
textStorage.addItem('user122782');
const numStorage = new DataStorage();
numStorage.addItem(12);
numStorage.addItem(122);
numStorage.addItem(889);
function createCourseGoal(title, describtion, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.describtion = describtion;
    courseGoal.complateUntil = date;
    return courseGoal;
}
const namesArr = ['Giorgi', 'Levana'];
