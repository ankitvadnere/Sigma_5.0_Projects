console.log("Hello World");
console.log("I am Ankit Vadnere");
console.log(1+2*5);

let a = 10, b = 20;
console.log(a+b);

let pen = 10;
let book = 60;
// let sum = "The total price is " + (pen + book) + " rs.";
// We can instead write
let sum = `The total price is ${pen + book} rs.`;
console.log(sum);

let age = 16;
console.log(age > 18);

let n = 6;
let str = '6';
console.log(typeof(n));
console.log(typeof(str));
console.log(n == str);//== operator compares only values and ignores datatype

let m = 7;
let msg = '7';
console.log(typeof(m));
console.log(typeof(msg));
console.log(m === msg);// === operator compares values as well as datatype

age = 12;
if(age >= 18){
    console.log("You are adult you can drive.")
}

let name = "Ankit";
if(name == "Ankit"){
    console.log(`Hello ${name}`);
}
