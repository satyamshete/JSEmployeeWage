function CheckPresentAbsent()
{
    return Math.floor(Math.random() * 10 % 2);
}
let empCheck = CheckPresentAbsent();
const isFullTime = 1;
if (empCheck == isFullTime) {
  console.log("UC1-> Employee is present");
} else {
  console.log("UC1-> Employee is Absent");
}

function CheckFullPartTime() {
    return Math.floor((Math.random() * 10) % 3);
  }
  
  empCheck = CheckFullPartTime();
  const isPartTime = 2;
  const wagePerHour = 20;
  let empHrs;
  let dailyWage=0;
  
  function GetWorkHour(){
  switch (empCheck) {
    case isFullTime:
      empHrs = 8;
      break;
    case isPartTime:
      empHrs = 4;
      break;
  
    default:
      empHrs = 0;
      break;
  }
  return empHrs;
}
dailyWage = GetWorkHour()*wagePerHour
console.log("UC3-> DailyWage is :",dailyWage)
