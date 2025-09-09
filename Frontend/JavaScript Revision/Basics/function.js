//==>> Note: function defination and function call

/*
// function myFunction() {
//   let first = "Hello";
//   let last = "Coder's";
//   console.log(`${first} ${last}`);
// }
// myFunction();

// ========== Example Sum ==========
// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(5, 9));

// ========== Example Multiply ==========
// function multiply(x, y) {
//   return x * y;
// }
// console.log(multiply(5, 9));

// ========== Arrow Function ==========
// ========== Example Sum ==========
const arrowSum = (a, b) => {
  return a + b;
};
console.log(arrowSum(5, 9));

// ========== Example Sum ==========
let arrowMultiply = (x, y) => {
  return x * y;
};
console.log(arrowMultiply(5, 9));
// ========== Example ==========
const arrow = () => {
  let f = "Hello";
  let l = "Coder's";
  return `${f} ${l}`;
};
console.log(arrow());

// ========== Practice Task Using Arrow Function ==========
// const countVowels = (str) => {
//   let count = 0;
//   for (const char of str) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u"
//     ) {
//       count++;
//     }
//   }
//   console.log(count);
// };

// countVowels("amanada");
// countVowels("apex");

// ========== Practice Task Using Normal Function ==========
function countVowels(str) {
  let count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  console.log(count);
}
countVowels("amanada");
countVowels("apex");

// ========== Call Function From Function ==========
function lower() {
  return "hello coder's";
}
function upper(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(upper(lower()));

// ========== FUNCTION x METHODS ==========
// let arr = [2, 4, 5, 8, 9];
// let cities = ["surat", "mumbai", "rishikesh", "manali", "kerala", "goa"];

// cities.forEach((value, idx) => {
//   let capital = value.charAt(0).toUpperCase() + value.slice(1);
//   console.log(idx, capital);
// });

// ========== Examples of Methods ==========
let nums = [2, 9, 4, 5, 8];

// ========== 'forEach' Method ==========
console.log("USE 'forEach' METHOD");
nums.forEach((n) => {
  console.log(n * n);
});

// ========== 'map' Method ==========
console.log("USE 'map' METHOD");
const newArr = nums.map((value) => {
  return value * value;
});
console.log(newArr);

// ========== 'filter' Method ==========
console.log("USE 'filter' METHOD");
let even = nums.filter((value) => {
  //   return value % 2 === 0;
  return value < 7;
});
console.log(even);

// ========== 'reduce' Method ==========
console.log("USE 'reduce' METHOD");
const output = nums.reduce((prev, curr) => {
  //   return prev + curr;       // Get total number of array
  return prev > curr ? prev : curr; // Get big number of array
});
console.log(output);

// ========== 'loop' Method ==========
console.log("USE 'loop' METHOD");
for (let n of nums) {
  console.log(n);
}

*/

// ========== Practice Task ==========
// let students = [95, 92, 85, 89, 94, 74];
let students = [97, 64, 32, 49, 99, 96, 86];

const stdMark = students.filter((mark) => {
  return mark > 90;
});
console.log(stdMark);

// ========== Practice Task ==========
// /*
const readline = require("readline");
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("Enter the any one number: ", function (input) {
  //   const i = 1;
  let newArr = [];
  for (i = 1; i <= input; i++) {
    newArr[i - 1] = i;
    // console.log(i);
  }
  const avg = newArr.reduce((prev, curr) => {
    return prev + curr;
  });
  console.log("Sum -", avg);

  const factorials = newArr.reduce((prev, curr) => {
    return prev * curr;
  });
  console.log("Factorial -", factorials);

  r1.close();
});
// */

// const usr = prompt(parseInt("Enter any number:"));
// let newArr = [];

// for (let i = 1; i <= usr; i++) {
//   newArr[i - 1] = i;
//   console.log(i);
// }
