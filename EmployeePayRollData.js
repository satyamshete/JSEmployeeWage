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
    get id() {
        return this._id;
      }
    
      set id(id) {
        if (id > 0) {
          this._id = id;
        } else throw "Invalid ID , should be greater than zero";
      }
      get salary() {
        return this._salary;
      }
    
      set salary(salary) {
        if (salary > 0) {
          this._salary = salary;
        } else throw "Invalid salary , should be greater than zero";
      }
      get gender() {
        return this._gender;
      }
    
      set gender(gen) {
        if (gen == "M" || gen == "F") {
          this._gender = gen;
        } else throw "Gender should be M or F";
      }
      get date() {
        return this._date;
      }
    
      set date(date) {
        if (date <= new Date()) {
          this._date = date;
        } else throw "Invalid date ,it should not be in future";
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
    let employeeOne = new EmployeePayroll(1740, "Smriti", 25874,"F",new Date());
  console.log(employeeOne.toString());
  employeeOne.name = "Dinesh";
  console.log(employeeOne.toString());
  //let employeeSecond = new EmployeePayroll(0, "Vinod", 74564,"M",new Date());
  //let employeeThird = new EmployeePayroll(1650, "chandra", 74564,"M",new Date());
 // let employeeFourth = new EmployeePayroll(1450, "Dewanshu", 0,"M",new Date())
  //et employeeFifth = new EmployeePayroll(950, "Poorva", 45155,"k",new Date())
  //let employeeSix = new EmployeePayroll(750, "Deepa", 45155,"M",  new Date("Oct 24, 2022"))

  } catch (error) {
    console.log(error);
  }

