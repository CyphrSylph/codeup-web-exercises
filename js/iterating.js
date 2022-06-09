(function(){
	"use strict";

	/**
	 * TODO:
	 * Create an array of 4 people's names and store it in a variable called
	 * 'names'.
	 */

	let names = ['Tanjiro','Insosuke','Zenitsu','Nezuko']

	/**
	 * TODO:
	 * Create a log statement that will log the number of elements in the names
	 * array.
	 */

	console.log('Logging name length...')
	console.log(names.length);

	/**
	 * TODO:
	 * Create log statements that will print each of the names individually by
	 * accessing each element's index.
	 */

	console.log('Logging individual elements...')
	console.log(names[0]);
	console.log(names[1]);
	console.log(names[2]);
	console.log(names[3]);

	/**
	 * TODO:
	 * Write some code that uses a for loop to log every item in the names
	 * array.
	 */

	console.log('Logging elements with for loop...')
	for(let i = 0; i < names.length; i++) { // The index number is used with the operator
		console.log(names[i]); // The number of times the loop has run is still represented by "i"
	}

	/**
	 * TODO:
	 * Refactor your above code to use a `forEach` loop
	 */

	console.log('Logging elements with forEach loop...')
	names.forEach(function (name) {
		console.log(name);
	})

	console.log('Logging elements and index with forEach loop...')
	names.forEach(function (name, index) {
		console.log(name, index);
	})


	/**
	 * TODO:
	 * Create the following three functions, each will accept an array and return an an element from it
	 * - first: returns the first item in the array
	 * - second: returns the second item in the array
	 * - last: returns the last item in the array
	 *
	 * Example:
	 *  > first([1, 2, 3, 4, 5]) // returns 1
	 *  > second([1, 2, 3, 4, 5]) // returns 2
	 *  > last([1, 2, 3, 4, 5]) // return 5
	 */

	// Exercise Breakdown:
	// Three Functions: fun1, fun2, fun3
	// Array: nums
	// Elements: 1, 2, 3, 4, 5 (number)

	let nums = ['1','2','3','4','5'];

	function first(array) {
		return array[0]; // returns first element of array: 1
	}

	first(nums);

	function second(array) {
		return array[1]; // returns second element of array: 2
	}

	second(nums);

	function last(array) {
		return array[nums.length - 1]; // .length -1 returns the last element in the array: 5
	}

	console.log('Logging first element in array...' + first(nums));
	console.log('Logging second element in array...' + second(nums));
	console.log('Logging last element in array...' + last(nums));

})();
