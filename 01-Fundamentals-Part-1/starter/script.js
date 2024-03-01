let js = "amazing";

console.log(12 + 234 + 32 - 23);
const now = 2038;
const ageJonas = now - 1991;
const ageSarah = now - 2014;
console.log(ageJonas, ageSarah);

const firstName = "Jonas";
const lastName = "Shmidt";
console.log(firstName + " " + lastName);

let x = 10 + 5;
x += 10;
x *= 4;
console.log(x);

const massMark = 78;
const heightMark = 1.69;
const bmiMark = massMark / (heightMark * heightMark);

const massJohn = 92;
const heightJohn = 1.95;
const bmiJohn = massJohn / (heightJohn * heightJohn);

let markHigherBMI = bmiMark > bmiJohn;

if ((markHigherBMI = true)) {
  console.log(
    "Mark's BMI (" + bmiMark + ") is higher than John's (" + bmiJohn + ") !"
  );
} else {
  console.log(
    "John's BMI (" + bmiJohn + ") is higher than Mark's (" + bmiMark + ") !"
  );
}

console.log(markHigherBMI);

const averageAge = (ageJonas + ageSarah) / 2;

console.log(averageAge);

const inputYear = "1991";
console.log(Number(inputYear) + 18);

const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

if (scoreDolphins === scoreKoalas) {
  console.log("Both win the trophy");
} else if (scoreDolphins > scoreKoalas) {
  console.log("Dolphins win the trophy");
} else {
  console.log("Koalas win the trophy");
}

const bill = 275;
const tip = bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2;
console.log(
  "The bill was " +
    bill +
    ", the tip was " +
    tip +
    ", and the total value " +
    (bill + tip) +
    "."
);
