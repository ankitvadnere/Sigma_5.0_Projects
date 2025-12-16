let students = ["Ankit", "Harshita", "Anushka"];
console.log(students);

students.push("Abhiram");
students.pop();
students.unshift("Rajat");
students.shift();

let cars = ["audi", "bmw", "maruti", "tata"];
cars.slice(2);
cars.concat(students);
cars.slice(2,4);
cars.slice(-2);

console.log(cars.splice(1, 1, "suzuki", "toyota"));

let num1 = [[1,2], [2,3], [3,4]];
let num2 = [[4,5], [5,6], [6,7]];
let num3 = [[7,8], [8,9], [9,0]];
let num = [num1, num2, num3];