class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }
}

const account = new Department("Giorgi");
console.log(account);