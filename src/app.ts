class Department {
  // private readonly id: string;
  // private name: string;
  private employees: string[] = [];

  constructor(private readonly id: string, private name: string) {}

  describe(this: Department) {
    console.log(`Department: ${this.name}`);
  }

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
    super(id,"ITDepartment");
    this.admins = admins; 
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]){
    super(id, "Accounting")
  }

  addReports(text:string){
    this.reports.push(text)
  }

  printReports(){
    console.log(`Reports:  ${this.reports}`);
  }
}

const it = new ITDepartment("ITD",["Giorgi,Max"]);
it.describe();
it.addEmployee("Giorgi");
it.printEmployeeInformation();

console.log(it);

const accounting = new AccountingDepartment("ADI",[])

accounting.addReports("something went wrong...")
accounting.printReports()

// const accountCopy = { emploees: ['Giorgi'],neame: "Devops", describe: account.describe };

// accountCopy.describe()
