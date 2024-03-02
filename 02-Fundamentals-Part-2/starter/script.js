function logger() {
  console.log("My name is Ahmed");
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

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

