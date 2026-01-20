const temperatures = [32, 35, 28, 40, 38, 30, 42];
//temperatures above 35
let above35 = temperatures.filter(temp => temp > 35);
console.log("Above 35:", above35);
// convert Celsius to Fahrenheit
let fahrenheitTemps = temperatures.map(c => (c * 9 / 5) + 32);
console.log("Fahrenheit:", fahrenheitTemps);
// calculate average temperature
let averageTemp =
  temperatures.reduce((sum, temp) => sum + temp, 0) / temperatures.length;
console.log("Average Temperature:", averageTemp);
// first temperature above 40
let firstAbove40 = temperatures.find(temp => temp > 40);
console.log("First Temperature Above 40:", firstAbove40);
// index of temperature 28
let indexOf28 = temperatures.findIndex(temp => temp === 28);
console.log("Index of 28:", indexOf28);
