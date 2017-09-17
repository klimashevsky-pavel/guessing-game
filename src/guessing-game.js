class GuessingGame {

    constructor() {
    	this.root = null;
    	this.min = null;
    	this.max = null;


    }

    setRange(min, max) {
    	this.min = min;
    	this.max = max;
    	return this.min;
    	return this.max;
    }

    guess() {
    	this.root = Math.round((this.min + this.max)/2);
    	return this.root;
    }

    lower() {
    		this.max= this.root;
    		return this.max;
    }

    greater() {
    		this.min = this.root;
    		return this.min;
    }
}

module.exports = GuessingGame;
