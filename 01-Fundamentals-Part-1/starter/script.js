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

const weightMark = 78;
const heightMark = 1.69;
const bmiMark = weightMark / (heightMark * heightMark);

const weightJohn = 92;
const heightJohn = 1.95;
const bmiJohn = weightJohn / (heightJohn * heightJohn);

let markHigherBMI = bmiMark > bmiJohn;

if ((markHigherBMI = true)) {
  console.log(
    "Mark's BMI (" + bmiMark + ") is higher than John's (" + bmiJohn + ") !"
  );
} else {
  console.log(
    "John's BMI " + bmiJohn + " is higher than Mark's " + bmiMark + " !"
  );
}

console.log(markHigherBMI);
