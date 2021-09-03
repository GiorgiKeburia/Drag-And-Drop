abstract class Department {
  static fiscalYear = 2020
  // private readonly id: string;
  // private name: string;
  protected employees: string[] = [];

  constructor(protected readonly id: string, private name: string) {}

  static createEmployee(name: string){
    return { name: name}
  }

  abstract describe(this: Department): void

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(`Employees ${this.id}: ${this.employees}`);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "ITDepartment");
    this.admins = admins;
  }
  describe(){
    console.log(`It Department - ID: ${this.id}`);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  get mosrRecentReport(): string {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report Found");
  }

  set mosrRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in valid value");
    }
    this.addReports(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  addReports(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(`Reports:  ${this.reports}`);
  }

  describe(){
    console.log(`Accounting Department -ID: ${this.id}`); 
  }

  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }
}

const employee1 = Department.createEmployee("alias")
console.log(employee1, Department.fiscalYear);

const it = new ITDepartment("ITD", ["Giorgi,Max"]);
// it.describe();
it.addEmployee("Giorgi");
// it.printEmployeeInformation();

// console.log(it);

const accounting = new AccountingDepartment("ADI", []);

accounting.addReports("something went wrong...");
accounting.addEmployee("Max");
accounting.addEmployee("Levana");
accounting.describe() 
// accounting.printEmployeeInformation();
accounting.mosrRecentReport = "Data is not retrieved..."
// console.log(accounting.mosrRecentReport);
// accounting.printReports()
// const accountCopy = { emploees: ['Giorgi'],neame: "Devops", describe: account.describe };

// accountCopy.describe()
