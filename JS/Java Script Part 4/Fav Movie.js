let favMovie = "avengers";
let guess = prompt("Guess my fav movie: ");
guess = guess.toLowerCase();

while ((guess != favMovie)&&(guess != 'quit')){
    guess = prompt("Enter the guess again or quit if you want");
}

if (guess == favMovie){
    console.log("Perfect guess");
} else {
    console.log("You quit");
}