const numbers = [1, -2, 3, -4, 5, -6];
let sumOfPositives = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    sumOfPositives += numbers[i];
  }
}

console.log("Sum of positive numbers:", sumOfPositives);