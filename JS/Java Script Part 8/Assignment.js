let arr = [1,2,3,4,5];

let sqrSum = arr.reduce((res, el) => {
    return (res + el**2);
});
let avg = sqrSum/arr.length;
console.log(avg);

let newArr = arr.map((el) => {
    return el + 5;
});
console.log(...newArr);

let strs = ["ankit", "harshita", "abhiram", "amogh", "rajat"];
let newStrs = strs.map((el) => {
    return el.toUpperCase();
});
console.log(...newStrs);

function doubleAndReturnArgs(arr, ...args){
    let arrDouble = arr.map((el) => {
        return el * 2;
    });
    let argsDouble = args.map((el) => {
        return el * 2;
    });
    return [...arrDouble, ...argsDouble];
}
console.log(doubleAndReturnArgs(arr, 1, 5, 4, 7, 2, 8));

const obj1 = {
    prop1: 1,
    prop2: 2
};
const obj2 = {
    prop3: 3,
    prop4: 4
};
function mergeObjects(obj1, obj2){
    return {...obj1, ...obj2};
}
console.log(obj1, obj2);