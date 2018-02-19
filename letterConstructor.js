function Letter(char){
	//properties
	this.char = char
	this.isGuessed = false
	//methods
	this.makeVisible = function(){
		this.isGuessed = true
	}

	this.replaceBlanks = function(char){
		return !(this.isGuessed) ? "_" : this.char
	}
}

module.exports = Letter