console.log("Hello Coders");

// ======== Get Input From User in VS Code Terminal ========
/*
const readline = require("readline");
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question("Enter the full name: ", function (input) {
  if (input === "") {
    console.log("PLEASE ENTER SOMETHING.");
  } else {
    let capital = input.charAt(0).toUpperCase() + input.slice(1)
    console.log(`@${capital}${input.length}`);
  }

  r1.close();
});
*/

// ========= Practice x Use of "loops" =========
let employee = ["Jack", "Julia", "Apex", "Amanada"];
employee[1] = "Afreen";
/*
// "for" Loop
for (let e of employee) {
  console.log(e);
}

// "for in" Loop
for (let e = 0; e < employee.length; e++) {
  console.log(employee[e]);
}
*/

// ========= Practice x Get UpperCase =========
cities = ["surat", "mumbai", "delhi", "rishikesh", "manali"];

for (city of cities) {
  console.log(city.charAt(0).toUpperCase() + city.slice(1));
}

// ========= Practice x Avarage Marks =========
let marks = [85, 44, 97, 37, 76, 60];

let sum = 0;
for (let mark of marks) {
  sum += mark;
}
let avg = sum / marks.length;
console.log("Avrage marks is: ", avg);

let fixPrice = [250, 645, 300, 900, 50];

let disPrice = fixPrice.map((price) => price - price * 0.1);
console.log("Fix Rate -", fixPrice);
console.log("After Disccount -", disPrice);

// ========= Array x Method =========
let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

// console.log(companies);

companies.shift();
companies.splice(2, 1, "OLA");
companies.push("Amazon");
companies.unshift("Asus");
// console.log(companies);

let index = 0;
for (let company of companies) {
  index++;
  console.log(`No. ${index} - ${company}`);
}

// ========= use Array to get details of Employee =========
// /*
let emp = [
  {
    name: "Jack",
    salary: 40000,
    language: "Python",
    isManager: false,
  },
  {
    name: "Julia",
    salary: 45000,
    language: "Swift",
    isManager: false,
  },
  {
    name: "Apex",
    salary: 70000,
    language: "Full Stack",
    isManager: true,
  },
  {
    name: "Amanda",
    salary: 50000,
    language: "Java",
    isManager: true,
  },
];

// for (const e of emp) {
//   console.log(
//     `The Employer ${e.name}, Salary is ${e.salary}, You're good with ${e.language}`
//   );
// }
// */
