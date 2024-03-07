function logger() {
  console.log("My name is Ahmed");
}

logger();
logger();
logger();

// //function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

const appleJuice = fruitProcessor(4, 0);
console.log(appleJuice);
console.log(fruitProcessor(4, 0));

const appleOrangeJuice = fruitProcessor(4, 5);
console.log(appleOrangeJuice);

function calcAge1(birthYear) {
  return 2024 - birthYear;
}

const age1 = calcAge1(1996);
console.log(age1);

const calcAge2 = function (birthYear) {
  return 2024 - birthYear;
};

const age2 = calcAge2(1991);
console.log(age2);

console.log(age1, age2);

const calcAge3 = (birthyear) => 2024 - birthyear;

const age3 = calcAge3(1997);
console.log(age3);

const yearsUntilRetirement = (birthyear, firstName) => {
  const age = calcAge3(birthyear);
  const retirement = 65 - age;
  const retirementYear = 2024 + retirement;
  if (retirement == 0) {
    return `${firstName} retires this year in ${retirementYear}.`;
  } else if (retirement < 0) {
    let yearsRetired = retirement * -1;
    return `${firstName} has been retired for ${yearsRetired} years since ${retirementYear}.`;
  } else {
    return `${firstName} retires in ${retirement} years in ${retirementYear}.`;
  }
};

console.log(yearsUntilRetirement(1996, "Ahmed"));

console.log(yearsUntilRetirement(1959, "Mike"));
console.log(yearsUntilRetirement(1959, "Mike"));
console.log(yearsUntilRetirement(1959, "Mike"));
console.log(yearsUntilRetirement(1959, "Mike"));

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  console.log(apples, oranges);
  const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
  return juice;
}

console.log(fruitProcessor(2, 3));

//code challange part 2 number 1 :
// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// const scoreDolphins = calcAverage(score1, score2, score3);
// const scoreKoalas = calcAverage(score1, score2, score3);

// function checkWinner(scoreDolphins, scoreKoalas) {
//   if (scoreKoalas > scoreDolphins) {
//     console.log(`Koalas win (${scoreKoalas} vs. ${scoreDolphins})`);
//   } else if (scoreDolphins > scoreKoalas) {
//     console.log(`Dolphins win (${scoreDolphins} vs. ${scoreKoalas})`);
//   } else {
//     console.log("No team wins...");
//   }
// }

const friends = ["John", "olive", "jay"];

console.log(friends.indexOf("John"));
console.log(friends.indexOf("jay"));
console.log(friends.includes("jay"));
console.log(friends.includes("joe"));

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [123, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip([bills[2]])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);

//challange

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2024 - 1996,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};

console.log(jonas);

console.log(jonas.lastName);
console.log(jonas["lastName"]);

console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
);
