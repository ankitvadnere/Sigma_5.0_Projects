function multipleGreet(func, n){
    for (let i = 1; i <= n; i++){
        func();
    }
}
function greet(){
    console.log("Hello");
}

multipleGreet(greet, 5);
multipleGreet(function namaste(){console.log("Namaste")}, 15);

function oddOrEvenFactory(req){
    if(req == "odd"){
        let odd = function(n){
            console.log(!(n%2 == 0));
        }
        return odd;
    } else if (req == "even"){
        let even = function(n){
            console.log(n%2 == 0);
        }
        return even;
    } else {
        console.log("Wrong Request");
    }
}

let func = oddOrEvenFactory("odd");
func(5);

// const calculator = {
//     add: function(a, b){
//         return a + b;
//     },
//     sub: function(a, b){
//         return a - b;
//     },
//     mul: function(a, b){
//         return a*b;
//     }
// };

// OR

const calculator = {
    add(a, b){
        return a + b;
    },
    sub(a, b){
        return a - b;
    },
    mul(a, b){
        return a*b;
    }
};