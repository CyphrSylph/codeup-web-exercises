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

	//The below code shows how to get the random numbers for this exercise:

	// Randomize amount of all cones - fixed
	// initialize cones remaining
	// initialize cones sold
	// write a while loop that evaluates cones sold with respect to total inventory of cones
	// randomize how many cones you sell each time
	// store how many cones you have remaining
	// conditionally evaluate if you're trying to sell more cones than you have and if you still have cones remaining
	// close out the loop if you sell all of your cones
	// increase your counter

	// This is how you get a random number between 50 and 100
	let allCones = Math.floor(Math.random() * 50) + 50;
	// This expression will generate a random number between 1 and 5
	let soldCones = Math.floor(Math.random() * 5) + 1;

	while {

		soldCones = Math.floor(Math.random() * 5) + 1;

		console.log





})();