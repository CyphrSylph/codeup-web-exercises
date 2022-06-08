(function() {
	"use strict";

	//Exercise 2:
	//Prompt the user for an odd number between 1 and 50. Use a loop and a break
	//statement to continue prompting the user if they enter invalid input.

	//Exercise 3:
	//Use a loop and the continue statement to output all the odd number
	//between 1 and 50, except for the number the user entered.

	let userNum = (prompt('Enter an odd number (1-49):'))

	while (true) {
		if (userNum % 2 === 0) {
			console.log(userNum + ' is not an odd number.');
		} else if (userNum < 1 || userNum > 50) {
			console.log(userNum + 'is not between 1-50.');
		break;
		}
	}
		console.log(userNum + ' is the number to skip!');

	userNum = Number(userNum) // Converts userNum to Number data type and avoids type coercion

	for (let i = 0; i <= 50; i++) {
		if (i % 2 !== 0) {
			if(userNum === i){
				console.log("Yikes! Skipping number " + i);
				continue;
			}
			console.log(i + ' is an odd number');

		}

	}


	// Alternative Option:
	let userNum1 = prompt("Hello user - can you give me an odd number between 1 and 50?");

	while(true){
		if(userNum1 % 2 !== 0 && userNum1 >= 1 && userNum1 >= 50) {
			console.log('Odd number detected- Access granted');
			break;
		}
		userNum1 = prompt('That is not an odd number- try again')
	}

	userNum1 = Number(userNum1) // Converts userNum to Number data type and avoids type coercion

	for(let i = 1; i <= 50; i++){
		if(i % 2 !== 0){
			continue;
		} else if (i === userNum1){
			console.log('Eeep! Skipping' + userNum1);
		}
		console.log(i);
	}

})();