let arr = [1,2,3,7,2,4,8,3,5,2,9];
let delItem = 2;
for (let i = 0; i < arr.length; i++){
    if (arr[i] == delItem){
        arr.splice(i, 1);
    }
}
console.log(arr);

let number = 12345;
let digit = 0; 
let copy = number;
while(copy > 0){
    digit++;
    copy = Math.floor(copy/10);
}
console.log(digit);

let num2 = 1212;
let sum = 0;
let lastDigit;
let copy2 = num2;
while(copy2 > 0){
    lastDigit = copy2 % 10;
    copy2 = Math.floor(copy2/10);
    sum += lastDigit;
}
console.log(sum);

let factNum = 7;
let fact = 1;
for (let i = 2; i <= 7; i++){
    fact *= i;
}
console.log(fact);

let nums = [2,8,4,9,32,12,75,12,54];
let largest = 0;
for (let i = 0; i < nums.length; i++){
    if (nums[i] > largest){
        largest = nums[i];
    }
}
console.log(largest);