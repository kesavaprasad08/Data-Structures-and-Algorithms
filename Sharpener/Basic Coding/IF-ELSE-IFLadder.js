//Given a variable D (distance) write a program to print the cost associated with it

// 0 to 100  - rs.5
// 100 to 500  - rs.8
// 500 to 999  - rs.10
// >=1000  - rs.12

function printCost(distance) {
    if (distance < 101) {
      console.log("Rs.5");
    } else if (distance < 501) {
      console.log("Rs.8");
    } else if (distance < 1000) {
      console.log("Rs.10");
    } else {
      console.log("Rs.12");
    }
  }
  
  printCost(0);
  