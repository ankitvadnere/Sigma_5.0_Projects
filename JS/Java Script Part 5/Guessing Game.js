const max = prompt("Enter the max number in the range: ");
const ans = Math.floor(Math.random() * max) + 1;
while(true){
    let guess = prompt("Enter your guess");
    if (guess == ans){
        alert("Perfect Guess");
        break;
    } else if (guess > ans){
        alert("Try a smaller number");
    } else {
        alert("Try a bigger number");
    }
}