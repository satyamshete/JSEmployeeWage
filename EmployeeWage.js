const isPartTime = 2;
const wagePerHour = 20;
let empHrs;
let TotalWokingDays=20;
let days=0;
let hours;
const isFullTime = 1;
let EmpWage=0;
let empCheck ;
let WorkHours=0;
let TotalWokingHrs=160;
let dailyWage  = [];
let dailyWageMap = new Map();
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

while (days < TotalWokingDays && WorkHours < TotalWokingHrs )
{  
    empCheck= CheckFullPartTime();
    hours=GetWorkHour()
    WorkHours+=hours
    dailyWage.push(hours * wagePerHour);
    days++;
    dailyWageMap.set(days, hours * wagePerHour);
}
EmpWage = WorkHours*wagePerHour
console.log(`UC4-> Employee wage for ${days} and ${WorkHours} working hours is ${EmpWage}`);
console.log(`UC5-> Total working days: ${days}, Total working hours: ${WorkHours} and total wage= ${EmpWage}`);
console.log("UC6-> Daily wage array: ", dailyWage.toString());

totalWage = 0;
function wageSum(element) {
  totalWage += element;
}
dailyWage.forEach(wageSum);
console.log("UC7-A total wage using for each: ", totalWage);

function totalWageReduce(totalWage, dailywage) {
  return totalWage + dailywage;
}

console.log(
  "UC7-A total wage using reduce: ",
  dailyWage.reduce(totalWageReduce, 0));

let day = 0;
function DailyWageMap(wage) {
  day++;
  return "day " + day + ":" + wage;
}

let WageMap = dailyWage.map(DailyWageMap);

console.log("UC7-B Day along with Daily Wage: ", WageMap);
function DailyWage160(wage) {
  return wage.includes("160");
}
console.log(
  "UC7-C Full time wage of 160 were earned using filter function: ",
  WageMap.filter(DailyWage160)
);

console.log(
  "UC7-D First occurrence when Full Time Wage was earned: ",
  WageMap.find((e) => e.includes("160"))
);

if (dailyWage.find((wage) => wage == 80))
  console.log("UC7 -F : Part time wage exists");
else {
  console.log("UC7-F : Part time wage does not exists");
}

let workingdays = 0;
function GetTotalWorkingdays() {
  ++workingdays;
}
dailyWage.filter((wage) => wage > 0).forEach(GetTotalWorkingdays);
console.log("UC7-G Total number of working days= ", workingdays);
console.log("UC8->  Daily wage by Map");
for (let [key, value] of dailyWageMap){
  console.log("Day: "+key+", Wage is: "+value);
}
totalWage=0;
dailyWageMap.forEach(value=> totalWage+=value)
console.log("UC8->  Total wage by Map is: "+totalWage);


