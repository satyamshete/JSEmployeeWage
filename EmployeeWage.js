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