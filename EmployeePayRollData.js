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
        //name check using Regex
        let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
        if (nameRegex.test(name)) {
          this._name = name;
        } else
          throw "Check if name is valid i.e start with Capital and min 3 alphabets";
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
  
  try {
    let employeeOne = new EmployeePayroll(1504, "Lisa", 2587469);
  console.log(employeeOne);
  employeeOne.name = "Dinesh";
  console.log(employeeOne.toString());
  let employeeSecond = new EmployeePayroll(1740, "Smriti", 25874,"F",new Date());
  console.log(employeeSecond.toString());
  let employeeThird = new EmployeePayroll(1650, "vinod", 74564,"M",new Date());
  } catch (error) {
    console.log(error);
  }