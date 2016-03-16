//Create a constructor that builds objects representing a generic playing card. 
//The playing card should keep track of each instances suit and value (Ace, 2, 3, ... Jack, Queen, King).


//Inputs: None
//Outputs: suit and value

// function playingCard() {
// 	this.suit = ['spades', 'hearts', 'clubs', 'diamonds'];
// 	this.value = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'King', 'Queen'];
// }



//Create a constructor that builds objects representing a six sided die. 
//The die should keep track of the current number that it shows (1-6) and have a roll 
//method that will simulate rolling the die. 
//Rolling the die should change the current number.


//Inputs: None
//Outputs: number from 1 to 6

function sixSidedDie() {
	this.roll = function () {

		var result = 0;
		result = Math.floor(Math.random() * 6) + 1;
		return result;    
	}	
}

//die = new sixSidedDie;
//console.log(die.roll());



//Create a function called getProbabilities that will simulate rolling two die 1000 times. 
//The function should return an array that shows the number of times the sum of the two die added up 
//to 2, 3, 4, ... 12. 


//Inputs: None.  
//Outputs: How many occurrences for each possible combination: 2, 3, 4,...12.   
function getProbabilities() {

		var occurrences = {};
		var numRolls = 1000;
	

		for (var i = 0; i < numRolls; i++) {

			var total = 0;

			var die1 = new sixSidedDie;
			var die2 = new sixSidedDie; 


			total = die1.roll() + die2.roll();

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


var result = getProbabilities();
console.log(result);





