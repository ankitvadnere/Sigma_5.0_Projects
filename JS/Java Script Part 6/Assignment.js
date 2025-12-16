let arr = [1,2,6,2,3,7,9,3];
let n = 2;
console.log(arr);

function greaterThanThis(arr, n){
    let finalArr = [];
    for(let i = 0; i < arr.length; i++){
        if (arr[i] > n){
            finalArr.push(arr[i]);
        }
    }
    return finalArr;
}

console.log("The elements greater than ", n , "are ");
console.log(greaterThanThis(arr, n));

let str = "absaasfwtsva";
console.log(str);

function removeDuplicates(str){
    let ans = "";
    for (let i = 0; i < str.length; i++){
        let currChar = str[i];
        if(ans.indexOf(currChar) == -1){
            ans += currChar;
        }
    }
    return ans;
}

console.log(removeDuplicates(str));

// function longestName(){
//     let n = prompt("How many countries do you want to enter?");
//     let arr = [];
//     let largestLength = 0;
//     let largestStr;
//     for (let i = 0; i < n; i++){
//         arr[i] = prompt("Enter first country");
//     }
//     for (let i = 0; i < n; i++){
//         if (arr[i].length > largestLength){
//             largestLength = arr[i].length;
//             largestStr = arr[i];
//         }
//     }
//     console.log(largestStr);
// }
// longestName();

function isVowel(char){
    let vowels = "AEIOUaeiou";
    for (let i = 0; i < vowels.length; i++){
        if (char == vowels[i]){
            return true;
        }
    }
    return false;
}
function checkNoOfVowels(str){
    let count = 0;
    for (let i = 0; i < str.length; i++){
        if (isVowel(str[i])){
            count++;
        }
    }
    return count;
}
console.log(checkNoOfVowels("Ankit Sachin Vadnere"));

function numberGenerator(start, end){
    let range = (end - start) + 1;
    return Math.floor(Math.random() * range) + start;
}
let start = 16;
let end = 22;
console.log(`Random number between ${start} and ${end} is ${numberGenerator(start, end)}`);