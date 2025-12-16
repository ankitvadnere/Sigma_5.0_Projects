let greet = "Hello";//Global Scope

function changeGreet(){
    let greet = "Namaste";//Function Scope
    console.log(greet);
    function innerGreet(){
        console.log(greet);//Lexical Scope
    }
}
console.log(greet);
changeGreet();