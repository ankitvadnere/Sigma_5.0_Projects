function hello(){
    console.log("Hello");
}
hello();

function rollDice(){
    let dieRoll = Math.floor(Math.random() * 6) + 1;
    console.log(`The number on the die is ${dieRoll}`);
}
rollDice();

//Function with parameter
function printName(name){
    console.log(name);
}
printName("Ankit");

function printInfo(name, age){
    console.log(`${name} is ${age} years old`);
}
printInfo("Ankit", 19);

function sum(a, b){
    return a + b;
}
console.log(`Sum = ${sum(4,8)}`);

function avgOfThree(a, b, c){
    console.log((a + b + c)/3);
}
avgOfThree(4,6,7);

function printTable(num){
    for (let i = 1; i <= 10; i++){
        console.log(`${num} x ${i} = ${num * i}`);
    }
}
printTable(26);

//Trick to find out sum of 3 numbers with function having two parameters
let s = sum(sum(2,3),4);
console.log(s);

function isAdult(age){
    if (age >= 18){
        return "Adult";
    } else {
        return "Not adult";
    }
}
console.log(isAdult(23));

function sumOfNaturalNums(n){
    let sum = 0;//Function scope
    for (let i = 1; i <= n; i++){
        sum += i;
    }
    return sum;
}
let n = 10000;//Global Scope
console.log(`Sum of first ${n} natural numbers is ${sumOfNaturalNums(n)}`);

function concStrs(arr){
    let finalStr = "";
    for (let i = 0; i < arr.length; i++){
        finalStr += arr[i];
    }
    return arr;
}
let str = ["Hi", "!", "How", "are", "you", "?"];
console.log(concStrs(str));