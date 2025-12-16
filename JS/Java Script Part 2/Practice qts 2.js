let size = prompt("Enter a size(S,M,L,XL): ");
let S = 50;
let M = 100;
let L = 150;
let Xl = 200;
if (size === "S"){
    console.log(S);
} else if (size === "M"){
    console.log(M);
} else if (size === "L"){
    console.log(L);
} else if (size === "XL"){
    console.log(XL);
} else {
    console.log("Invalid size");
}