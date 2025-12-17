// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }

// //Program to say hello to all the names entered as arguments in process.argv 

// let args = process.argv;

// for (let i = 2; i < args.length; i++) {
//     console.log("Hello!",args[i]);
// }

// //Using module.exports from math.js

// const math = require("../Backend/math");

// const sum = math.sum(5,10);
// const mul = math.mul(5,10);
// console.log(mul, sum, math.PI, math.g);

// // Now we will require a entire directory

// const fruits = require("./Fruits");

// console.log(fruits); // This will give the array we have exported from index.js of the Fruits directory

import {sum, PI} from "./math.js"; //For this to work add "type": "module" is the package.json of this directory
import {generate} from "random-words";

console.log("Sum:",sum(10,12));
console.log("The value of PI is", PI);
console.log("Random Word :", generate());