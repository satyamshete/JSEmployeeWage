const isPartTime = 2;
const wagePerHour = 20;
let empHrs;
let dailyWage=0;
let TotalWokingDays=20;
let days=0;
const isFullTime = 1;
let EmpWage=0;
let empCheck ;
let WorkHours=0;
function CheckFullPartTime()  //Function to check employee present for full time or Part time or absent

{
    return Math.floor((Math.random() * 10) % 3);
}
function GetWorkHour() //// UC3-> Function to get work houe
{
  switch (empCheck) {
    case isFullTime:
      empHrs = 8;
      //console.log("UC2-> Employee is present full time");
      break;
    case isPartTime:
      empHrs = 4;
      //console.log("UC2-> Employee is present part time");
      break;
  
    default:
      empHrs = 0;
      //console.log("UC1-> Employee is Absent");
      break;
  }
  return empHrs;
}

while (days < TotalWokingDays)
{  
    empCheck= CheckFullPartTime();
    WorkHours+=GetWorkHour()
    days++;
}
EmpWage = WorkHours*wagePerHour
console.log(`UC4-> Employee wage for ${days} and ${WorkHours} working hours is ${EmpWage}`);
