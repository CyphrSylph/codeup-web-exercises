(function() {
	"use strict";

	//While Loop
	//Exercise 2:
	//Create a while loop that uses console.log() to create the output shown below:
	// 2
	// 4
	// 8
	// 16
	// 32
	// 64
	// 128
	// 256
	// 512
	// 1024
	// 2048
	// 4096
	// 8192
	// 16384
	// 32768
	// 65536

	let i = 2;

	while (i < 65537) {
		console.log(i);
	i *= 2;
	}


	//Do While Loop
	//Exercise 1:
	//An ice cream seller can't go home until she sells all of her cones. First write enough code
	//that generates a random number between 50 and 100 representing the amount of cones to sell
	//before you start your loop. Inside of the loop your code should generate another random number
	//between 1 and 5, simulating the amount of cones being bought by her clients. Use a do-while loop
	//to log to the console the amount of cones sold to each person.

	let allCones = Math.floor(Math.random() * 50) + 50; // This is how you get a random number between 50 and 100

	do {
		let soldCones = Math.floor(Math.random() * 5) + 1; // Expression generates a random number between 1 and 5

		if(allCones >= soldCones){
			//Cones Available
			allCones = allCones - soldCones; // Remove sold cones from total cones
			console.log(soldCones + ' cones sold! I have ' + allCones);
		} else {
			//Cones Unavailable
			console.log("Sorry, there are only " + allCones + " left. I can't sell" + soldCones + ".")
		}

	} while (allCones !== 0);
	// All Cones Sold
	console.log('Thank yo- All cones have been sold!')

})();