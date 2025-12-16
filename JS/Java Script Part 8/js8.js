// let arr = [2,4,6,7];

// arr.forEach((item) => {
//     console.log(item);
// });

// let Studs = [{
//     name: "Ankit",
//     marks: 97
// },{
//     name: "Harshita",
//     marks: 99
// },{
//     name: "Anushka",
//     marks: 96
// }];

// Studs.forEach((student) => {
//     console.log(student.name);
//     console.log(student.marks);
// });

// let newArr = arr.map((el) => {
//     return el*3;
// });

// console.log("New Array: ");
// newArr.forEach((el) => {
//     console.log(el);
// });

// let even = arr.filter((num) => {
//     return num % 2 == 0;
// });

// let odd = arr.filter((num) => {
//     return num % 2 != 0;
// })

// console.log(arr.every((el) => (el % 2 == 0)));
// console.log(arr.some((el) => (el % 2 != 0)));

// console.log(arr.reduce((sum, el) => (sum * el)));

// let nums = [2,55,6,9,3,7];
// console.log(nums.reduce((max, el) => {
//     if(max < el){
//         max = el;
//     }
//     return max;
// }));

// min = nums[0];
// console.log(nums.reduce((min, el) => {
//     if (el < min){
//         min = el;
//     }
//     return min;
// }))

// let tens = [10,20,30,40,50,60];
// console.log(tens.every((el) => el % 10 == 0));

// //Default Parameters
// function sum1(a, b = 3){
//     return a + b;
// }
// sum1(1, 2); //sum = 3;
// sum1(1); //sum = 4

// function sum2(a = 4, b){
//     return a + b;
// }
// sum2(1,4); //sum = 5;
// sum2(1); //a = 1, b = undefined sum = NaN

// //Spread
// let arr1 = [1,3,2,6,8,23,7,21,8,3,1,7,43,1];
// console.log(Math.max(...arr1));

// console.log(..."Ankit");

// let arr2 = [...arr1];
// console.log(...arr2);

// let chars = [..."Ankit"];
// console.log(...chars);

// let newObj = {...Studs};
// console.log(newObj);

// let arrObj = {...arr1};
// console.log(arrObj);

// //Rest
// function sum(...args){
//     return args.reduce((res, el) => (res + el));
// }
// console.log(sum(1,5,3,2,6,3));

// function min(...args){
//     return args.reduce((min, el) => {
//         if(min > el){
//             return el;
//         } else {
//             return min;
//         }
//     });
// }

//Destructuring arrays
let runners = ["A", "B", "C", "D", "E", "F", "G", "H"];
let [first, second, third, ...others] = runners;

//Destructuring Objects
const student = {
    name: 'Ankit',
    prn: 12412569,
    email: 'ankit.vadnere24@vit.edu',
    // city: 'Pune'
};

let {email: mailId, prn: PRN, city = 'Mumbai'} = student;