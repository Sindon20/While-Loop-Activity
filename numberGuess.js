const secretNumber = 3;
let guess;
let attempts = 0;

while (true) {
    gues = parseInt(prompt("Guess a number between 1 and 10:"));
    attempts++;

    if (guess === secreteNumber) {
        console.log("Correct!");
        break;
    } else if (guess < secretNumber) {
        console.log("Too low!");
    } else {
        console.log("Too high!");
    }
}