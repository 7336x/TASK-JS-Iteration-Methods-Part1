// Array of numbers
const numbers = [10, 13, 20, 25, 38, 35, 40];

// 1) Using `greaterThanTwentyFive` function that returns a new array containing numbers that are greater than or equal to 25.
const greaterThanTwentyFive = (numbers) => {
  return numbers.filter((number) => number >= 25); // write your code here...
};
//
// 2) Using `divisibleByFive` function return a new array containing numbers that are divisible by 5.
const divisibleByFive = (numbers) => {
  return numbers.filter((number) => number % 5 === 0); // write your code here...
};

// 3) Using `squaredNumbers` function return a new array that contains each number squared.
const squaredNumbers = (numbers) => {
  return numbers.map((number) => number * number); // write your code here...
};

// 4) Using `doubledNumbers` function return a new array that contains each number multiplied by 2.
const doubledNumbers = (numbers) => {
  return numbers.map((number) => number * 2); // write your code here...
};

// 5) Using `filteredAndSquared` function return the numbers that are greater than or equal to 20 and then square each of them.
const filteredAndSquared = (numbers) => {
  return numbers.filter((number) => number >= 20).map((number) => number ** 2); // write your code here...
};

// 6) Using `filteredAndTripled` return the numbers that are divisible by 5 and then multiply each of them by 3.
const filteredAndTripled = (numbers) => {
  return numbers
    .filter((number) => number % 5 === 0)
    .map((number) => number * 3); // write your code here...
};

// 🌶️🌶️🌶️ Extra

// 1) Using `logger` function log every element in an array
function logger(array) {
  array.forEach((element) => console.log(element)); // write your code here...
}

// 2) using `toCelsius` function return an array of temperatures in Celsius
function toCelsius(temperatures) {
  return temperatures.map((temp) => (temp - 32) * (5 / 9)); // write your code here...
}

// 3) using `hottestDays` function return an array of temperatures that exceed the threshold
function hottestDays(temperatures, threshold) {
  return temperatures.filter((temp) => temp > threshold); // write your code here...
}

// 4) Using `logHottestDays` function log temperatures that exceed the threshold to the console IN DEGREES CELSIUS  (hint: you can combine all previous functions)
function logHottestDays(temperatures, threshold) {
  const hottestInFahrenheit = hottestDays(temperatures, threshold);
  const hottestInCelsius = toCelsius(hottestInFahrenheit);
  logger(hottestInCelsius); // write your code here...
}

module.exports = {
  greaterThanTwentyFive,
  divisibleByFive,
  squaredNumbers,
  doubledNumbers,
  filteredAndSquared,
  filteredAndTripled,
  logger,
  toCelsius,
  hottestDays,
  logHottestDays,
};
