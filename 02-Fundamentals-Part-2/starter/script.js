// function logger() {
//   console.log("My name is Ahmed");
// }

// logger();
// logger();
// logger();

// // //function fruitProcessor(apples, oranges) {
// //   console.log(apples, oranges);
// //   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
// //   return juice;
// // }

// const appleJuice = fruitProcessor(4, 0);
// console.log(appleJuice);
// console.log(fruitProcessor(4, 0));

// const appleOrangeJuice = fruitProcessor(4, 5);
// console.log(appleOrangeJuice);

// function calcAge1(birthYear) {
//   return 2024 - birthYear;
// }

// const age1 = calcAge1(1996);
// console.log(age1);

// const calcAge2 = function (birthYear) {
//   return 2024 - birthYear;
// };

// const age2 = calcAge2(1991);
// console.log(age2);

// console.log(age1, age2);

// const calcAge3 = (birthyear) => 2024 - birthyear;

// const age3 = calcAge3(1997);
// console.log(age3);

// const yearsUntilRetirement = (birthyear, firstName) => {
//   const age = calcAge3(birthyear);
//   const retirement = 65 - age;
//   const retirementYear = 2024 + retirement;
//   if (retirement == 0) {
//     return `${firstName} retires this year in ${retirementYear}.`;
//   } else if (retirement < 0) {
//     let yearsRetired = retirement * -1;
//     return `${firstName} has been retired for ${yearsRetired} years since ${retirementYear}.`;
//   } else {
//     return `${firstName} retires in ${retirement} years in ${retirementYear}.`;
//   }
// };

// console.log(yearsUntilRetirement(1996, "Ahmed"));

// console.log(yearsUntilRetirement(1959, "Mike"));
// console.log(yearsUntilRetirement(1959, "Mike"));
// console.log(yearsUntilRetirement(1959, "Mike"));
// console.log(yearsUntilRetirement(1959, "Mike"));

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);
//   console.log(apples, oranges);
//   const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

// //code challange part 2 number 1 :
// // const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// // const scoreDolphins = calcAverage(score1, score2, score3);
// // const scoreKoalas = calcAverage(score1, score2, score3);

// // function checkWinner(scoreDolphins, scoreKoalas) {
// //   if (scoreKoalas > scoreDolphins) {
// //     console.log(`Koalas win (${scoreKoalas} vs. ${scoreDolphins})`);
// //   } else if (scoreDolphins > scoreKoalas) {
// //     console.log(`Dolphins win (${scoreDolphins} vs. ${scoreKoalas})`);
// //   } else {
// //     console.log("No team wins...");
// //   }
// // }

// const friends = ["John", "olive", "jay"];

// console.log(friends.indexOf("John"));
// console.log(friends.indexOf("jay"));
// console.log(friends.includes("jay"));
// console.log(friends.includes("joe"));

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// const bills = [123, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip([bills[2]])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(bills, tips, totals);

// //challange

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYear: 1996,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,
//   calcAge: function (birthYear) {
//     return 2024 - this.birthYear;
//   },
// };

// console.log(jonas);

// console.log(jonas.lastName);
// console.log(jonas["lastName"]);
// console.log(jonas.calcAge);

// console.log(
//   `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
// );

// let array = ["a", "b"];
// console.log(array.join("-"));

const mark = {
  fullname: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const john = {
  fullname: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

console.log(mark.calcBMI);
john.calcBMI;

console.log(john.bmi, mark.bmi);

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullname}'s BMI (${mark.bmi}) is higher then ${john.fullname}'s (${john.bmi})!`
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullname}'s BMI (${john.bmi}) is higher then ${mark.fullname}'s (${mark.bmi})!`
  );
}
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);
