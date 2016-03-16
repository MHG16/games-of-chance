
// function playingCard() {
// 	this.suit = ['spades', 'hearts', 'clubs', 'diamonds'];
// 	this.value = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'King', 'Queen'];
// }

function sixSidedDie() {
	this.number = [1, 2, 3, 4, 5, 6];
	this.roll = function () {

		var result = 0;
		result = Math.floor(Math.random() * 6) + 1;
		return result;    
	}	
}




//Inputs: None.  
//Outputs: How many occurrences for each possible combination: 2, 3, 4,...12.   
function getProbabilities(die1, die2) {

	this.sum = function () {

		var occurrences = {};
		var numRolls = 1000;
	

		for (var i = 0; i < numRolls; i++) {

			var total = 0;
			die1 = sixSidedDie.roll();
			die2 = sixSidedDie.roll(); 

			total = die1 + die2;

			if (total in occurrences) {
			//Update it's number on the list one by one
			occurrences[total]++;
			}
			//Otherwise
			else {
			//Add it to the list with a count of one
				occurrences[total] = 1;
			}
		}

	}
}

var result = getProbabilities();
console.log(result);





