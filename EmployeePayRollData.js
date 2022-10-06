class EmployeePayroll {
    constructor(...employeeData) {
      this.id = employeeData[0];
      this.name = employeeData[1];
      this.salary = employeeData[2];
      this.gender = employeeData[3];
      this.date = employeeData[4]
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
        this.salary +
        " Gender: " +
        this.gender +
        " Start Date: " +
        this.date
      );
    }
  }
  
  let employeeOne = new EmployeePayroll(1504, "Lisa", 2587469);
  console.log(employeeOne);
  
  employeeOne.name = "Dinesh";
  console.log(employeeOne);
  let employeeSecond = new EmployeePayroll(1740, "Smriti", 25874,"F",new Date());
  console.log(employeeSecond.toString());