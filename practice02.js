let gameVal = 34;
let userVal = prompt("Guess the game number: ");
console.log("User Value is:", userVal);
while(userVal == gamerVal){  //game
    userVal = prompt("You entered wrong number,Try again");
}
console.log("Congratulations, you entered the right number");

