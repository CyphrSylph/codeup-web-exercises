(function() {
	"use strict";

	//Exercise 2:
	//Prompt the user for an odd number between 1 and 50. Use a loop and a break
	//statement to continue prompting the user if they enter invalid input.

	//Exercise 3:
	//Use a loop and the continue statement to output all the odd number
	//between 1 and 50, except for the number the user entered.

	function oddNum() {

		while (true) {

			var userNum = (prompt('Enter an odd number (1-49):'))

			if (userNum % 2 === 0) {
				console.log(userNum + ' is not an odd number.');
			} else if (userNum < 1 || userNum > 50) {
				console.log(userNum + 'is not between 1-50.');
			} else {
				break;
			}
		}
			console.log(userNum + ' is the number to skip!');


			for (let i = 0; i <= 50; i++) {
				if (i % 2 !== 0) {
					if(userNum == i){
						console.log("yikes skipping number " + i);
						continue;
					}
					console.log(i + ' is an odd number');

				}


			}

	}
	oddNum();

})();