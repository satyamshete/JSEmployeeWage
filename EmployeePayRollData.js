class EmployeePayroll {
    constructor(id, name, salary) {
      this.id = id;
      this.name = name;
      this.salary = salary;
    }
  
    get name() {
      return this._name;
    }
  
    set name(name) {
      this._name = name;
    }
  
    toString() {
      return (
        "Employee Data " +
        "Id: " +
        this.id +
        " Name: " +
        this.name +
        " Salary: " +
        this.salary
      );
    }
  }
  
  let employee = new EmployeePayroll(1504, "Lisa", 2587469);
  console.log(employee);
  
  employee.name = "Dinesh";
  console.log(employee);