
function playingCard() {
	this.suit = ['spades', 'hearts', 'clubs', 'diamonds'];
	this.value = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'King', 'Queen'];
}

function sixSidedDie {
	this.number = [1, 2, 3, 4, 5, 6];
	this.roll = function () {

		var result = 0;
		result = Math.floor(Math.random() * 6) + 1;
		return result;    
	}	
}

function getProbabilities {

	
}


