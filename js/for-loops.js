(function() {

	"use strict";

	//Exercise 2:
	//Create a function named showMultiplicationTable that accepts a number and console.logs
	//the multiplication table for that number (just multiply by the numbers 1 through 10)

	//Example:
	//	for (var i = 0; i < 10; i++) {
	//     console.log('for loop iteration #' + i);
	// 	}

	function showMultiplicationTable(num) {

		// let num =(prompt('Enter a number:'))

		for (let i = 0; i <= 10; i++){
			let result = i * num;
			console.log(num + ' x ' + i + ' = ' + result )
		}
	}

	showMultiplicationTable(3);


	//Exercise 3:
	//Use a for loop and the code from the previous lessons to generate 10 random numbers
	// between 20 and 200 and output to the console whether each number is odd or even.

	//Hint:
	//let luckyNumber = Math.floor(Math.random() * 6);

	for (let i = 0; i < 10; i++) {
		let num1 = Math.floor((Math.random() * 201)+ 20);
			if (num1 % 2 === 0) {
				console.log(num1 + ' is even.')
			} else {
				console.log(num1 + ' is odd.')
			}
		}


	//Exercise 4:
	//Create a for loop that uses console.log to create the output shown below:
	// 1
	// 22
	// 333
	// 4444
	// 55555
	// 666666
	// 7777777
	// 88888888
	// 999999999

	function numTree() {

		let numTree = '';
		for (let i = 0; i < 10; i++) { //Loop One
			for (let j = 0; j < i; j++) { //Loop Two
 				numTree += i; //Concatenation
			}
			numTree += '\n'; //New Line Return
		}
		console.log(numTree)
	}
	numTree()


	//Exercise 5:
	//Create a for loop that uses console.log to create the output shown below:
	// 100
	// 95
	// 90
	// 85
	// 80
	// 75
	// 70
	// 65
	// 60
	// 55
	// 50
	// 45
	// 40
	// 35
	// 30
	// 25
	// 20
	// 15
	// 10
	// 5

	function counter() {

		let counter = '';
			for (let i = 100; i > 0; i -= 5) { //"i -=5" is shorthand for "i = i-5"
				counter += i;
				counter += '\n';
				}
		console.log(counter)
	}
	counter()

})();

