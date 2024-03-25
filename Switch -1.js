// Given the Day number, print the Day name in lower case corresponding to it by using the help of switch statement.Note: Day 1 - is monday.
// If the day is not valid example 1> day >7 then print invalid
// Input :-
// Day - 3
// Output :-
// wednesday

function printDay(num) {
  switch (num) {
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednessday");
      break;
    case 4:
      console.log("Thrsday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
    case 7:
      console.log("Sunday");
      break;

    default:
      console.log("invalid");
  }
}

printDay(5);
