let num = prompt("Enter a number: ");
if (num % 10 == 0){
    console.log("Good");
} else {
    console.log("Bad");
}

let name = prompt("Enter your name: ");
let age = prompt("Enter your age: ");
let msg = `${name} is ${age} years old`;
alert(msg);

let quarter = prompt("Enter a quarter number: ");
switch(quarter){
    case "1":
        console.log("Months in quarter 1: Jan, Feb, Mar");
        break;
    case "2":
        console.log("Months in quarter 2: Apr, May, Jun");
        break;
    case "3":
        console.log("Months in quarter 3: Jul, Aug, Sep");
        break;
    case "4":
        console.log("Months in quarter 4: Oct, Nov, Dec");
        break;
    default:
        console.log("Wrong Quarter Entered");
}

let str = prompt("Enter a string");
if((str[0] === "a" || str[0] === "A") && str.length > 5){
    console.log("Golden String");
} else {
    console.log("Not a golden string");
}

let a = 5;
let b = 6;
let c = 1;

if (a > b){
    if (a > c){
        console.log("a is greatest");
    } else if (c > a){
        console.log("c is greatest");
    }
} else {
    if (b > c){
        console.log("b is greatest");
    } else if (c > b){
        console.log("c is greatest");
    }
}

let num1 = 1238;
let num2 = 238;
if ((num1 % 10) == (num2 % 10)){
    console.log(`${num1} & ${num2} have same last digit i.e ${num1 % 10}`);
} else {
    console.log("Last digits are not same");
}