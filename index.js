import inquirer from "inquirer";
const guessNumber = Math.floor(Math.random() * 10 + 1);
const ans = await inquirer.prompt([{
        name: "userGuessednumber",
        type: "number",
        message: "Please guess any number between 1-10 : ",
    },
]);
if (ans.userGuessednumber === guessNumber) {
    console.log("Great! You guess correct number. ");
}
else {
    console.log("You guessed wrong number");
}
