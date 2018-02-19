// dependency for inquirer npm package
const inquirer = require("inquirer");
const Word = require("./wordConstructor.js")

var letterBlanks = [];

function Game(){
	//properties
	this.guesses = 0;
	this.wins = 0;
	this.losses = 0;
	this.lives = 10;
	this.letterBlanks = [];
	

	//method
	this.startGame = function(){
		//select random word
		// var chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
		this.wordBank = ["heart", "sternum", "fibula", "tibia", "thoracic"];
		this.currentWord = new Word(this.wordBank[Math.floor(Math.random() * this.wordBank.length)]);
		// console.log(this.currentWord);
		//then set properties of the object in here
		// this.currentWord = new Word(chosenWord);
	this.pushBlanks();
	this.makeGuess();
	}

	//method to push blanks into the letter spaces
	this.pushBlanks = function(){
		for (var i = 0; i < this.currentWord.length; i++){
			letterBlanks.push("_");
		return this.currentWord[i].join("_");
		}
		// console.log(this.currentWord.push("_"));
	}

	//method which prompts user to make a letter guess
	//then based on the answer, executes a correct or incorrect function
	this.makeGuess = function(){
		this.pushBlanks();
		inquirer.prompt([
		{
			name:"guess",
			message:"Enter letter guess: "
		}
		]).then(function(answer){
			var guessCorrect = this.currentWord.checkGuess(answer.guess)
			if (guessCorrect){
				//execute this function for correct guess
				console.log("Correct!");
				this.correctGuess();
			} else {
				//execute another function for incorrect guess
				console.log("Incorrect! Guesses left: " + lives--);
				this.incorrectGuess();
			}
		})
	}

	this.correctGuess = function (){

	}

	this.incorrectGuess = function (){

	}
}


//create a game object 
var game = new Game()
game.startGame()