"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // private readonly id: string;
        // private name: string;
        this.employees = [];
    }
    describe() {
        console.log(`Department: ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(`Employees ${this.id}: ${this.employees}`);
    }
}
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "ITDepartment");
        this.admins = admins;
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get mosrRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("No report Found");
    }
    set mosrRecentReport(value) {
        if (!value) {
            throw new Error("Please pass in valid value");
        }
        this.addReports(value);
    }
    addReports(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(`Reports:  ${this.reports}`);
    }
    addEmployee(name) {
        if (name === "Max") {
            return;
        }
        this.employees.push(name);
    }
}
const it = new ITDepartment("ITD", ["Giorgi,Max"]);
it.describe();
it.addEmployee("Giorgi");
it.printEmployeeInformation();
console.log(it);
const accounting = new AccountingDepartment("ADI", []);
accounting.addReports("something went wrong...");
accounting.addEmployee("Max");
accounting.addEmployee("Levana");
accounting.printEmployeeInformation();
accounting.mosrRecentReport = "Data is not retrieved...";
console.log(accounting.mosrRecentReport);
accounting.printReports();
// const accountCopy = { emploees: ['Giorgi'],neame: "Devops", describe: account.describe };
// accountCopy.describe()
