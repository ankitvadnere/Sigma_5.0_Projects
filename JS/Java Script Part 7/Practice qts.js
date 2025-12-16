const sqr = (n) => n*n;
console.log(sqr(5));

let id = setInterval( () => {
    console.log("hello world");
}, 2000);

setTimeout( () => {
    clearInterval(id);
    console.log("My name is Ankit");
}, 2000*5);

const arrayAvg = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    console.log(sum / arr.length);
}
let arr = [1,2,3,4,5,6];
arrayAvg(arr);

const isEven = (n) => {
    if (n % 2 == 0){
        console.log("Even");
    } else {
        console.log("Odd");
    }
}
isEven(4);
isEven(7);