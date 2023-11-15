// import * as mathOperations from `./mathOperations`;

// import {add,subtract,multiply,divide} from `./mathOperations`;

const mathOperations = require('./mathOperations');


const addition=mathOperations.add(786,456);
console.log(`addition of two numbers ::: ${addition}`);

const subtraction=mathOperations.subtract(125,36);
console.log(`subtraction of two numbers is::: ${subtraction}`);


const multiplication=mathOperations.multiply(45,85);

console.log(`multiplication of two numbers:: ${multiplication}`);

const divsion=mathOperations.divide(98,4);

console.log(`division of two numbers::: ${divsion}`);