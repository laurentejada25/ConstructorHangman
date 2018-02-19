var Letter = require("./letterConstructor.js")

function Word(chosenWord){
	//properties
	this.letterArr = chosenWord.split("").map(function(character){
		return new Letter(character)
	})

	//method
	this.checkGuess = function(guess){
		//logic to check the guess
		var guess = String.fromCharCode(event.keyCode);
		if (chosenWord.includes(guess)){
			console.log("Correct!");
			replaceBlanks(guess);
		}
		var didGuess = false
		for(i = 0; i < letterArr.length; i++){
			if(guess === letterArr[i].char){
				this.letterArr[i].makeVisible()
			didGuess = true
			}
		}
	return didGuess
	}

	this.makeVisible = function(){
		var string = '';
		for (var i = 0; i < chosenWord.length; i++){
			string += this.chosenWord[i].replaceBlanks();
		}
		return string;
	}
}

module.exports = Word