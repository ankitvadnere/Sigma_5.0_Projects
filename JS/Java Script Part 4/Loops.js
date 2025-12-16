for (let i = 1; i <= 5; i++){
    console.log(i);
}

for (let odd = 1; odd <= 15; odd += 2){
    console.log(odd);
}

for (let even = 2; even <= 10; even += 2){
    console.log(even);
}

let n = prompt("Enter a number");
n = parseInt(n);
for (let i = 1; i <= 10; i++){
    console.log(`${n} x ${i} = ${i*n}`);
}

let i = 1;
while (i <= 5){
    console.log(i);
    i++;
}