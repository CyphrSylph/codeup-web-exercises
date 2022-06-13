(function() {
	"use strict";

	/**
	 * TODO:
	 * Create an object with firstName and lastName properties that are strings
	 * with your first and last name. Store this object in a variable named
	 * `person`.
	 *
	 * Example:
	 *  > console.log(person.firstName) // "Rick"
	 *  > console.log(person.lastName) // "Sanchez"
	 */

	let person = {
		firstName: ['Secret', 'Morocco'],
		lastName: ['Squirrel', 'Mole']
	}
	console.log(person.firstName[1] + ' ' + person.lastName[1]);

	/**
	 * TODO:
	 * Add a sayHello method to the person object that returns a greeting using
	 * the firstName and lastName properties.
	 * console.log the returned message to check your work
	 *
	 * Example
	 * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
	 */

	person.sayHello = function() {
		console.log(this.firstName[0] +' '+ this.lastName[0])
	}
	person.sayHello();

	/** TODO:
	 * HEB has an offer for the shoppers that buy products amounting to
	 * more than $200. If a shopper spends more than $200, they get a 12%
	 * discount. Write a JS program, using conditionals, that logs to the
	 * browser, how much Ryan, Cameron and George need to pay. We know that
	 * Cameron bought $180, Ryan $250 and George $320. Your program will have to
	 * display a line with the name of the person, the amount before the
	 * discount, the discount, if any, and the amount after the discount.
	 *
	 * Uncomment the lines below to create an array of objects where each object
	 * represents one shopper. Use a foreach loop to iterate through the array,
	 * and console.log the relevant messages for each person
	 */

	// $200 = %12 Discount
		// The inverse of .12 is used for this equation for cleaner code (.88)
	// Console Log Message: name, pre amount, discount, post amount

	let shoppers = [
	    {name: 'Ron', amount: 180},
	    {name: 'Fred', amount: 250},
	    {name: 'George', amount: 320}
	];

	// Method 1 forEach:

	shoppers.forEach(function(total){
		if (total.amount > 200) {
		let finalTotal = .88 * total.amount
			console.log(`Hello ${total.name}, your total is ${total.amount}, you will receive a discount of %12, bringing your total to ${finalTotal}.`)
		} else {
			console.log(`Hello ${total.name} your total is ${total.amount}.`)
		}
	})

	// // Method 2 forLoop:
	//
	// for (let i = 0; i < shoppers.length; i++) {
	// 	const shopper = shoppers[i];
	// 	console.log(shopper)
	// 	let outputString = `${shopper.name} ${shopper.amount}`;
	// 		if(shopper.amount > 200){
	// 			let discount = shopper.amount * .12;
	// 			let afterDiscountAmount = shopper.amount - discount;
	// 			outputString += `${discount.toFixed(2)} ${afterDiscountAmount.toFixed(2)}`
	// 		}
	// 	console.log(outputString);
	// }


	/** TODO:
	 * Create an array of objects that represent books and store it in a
	 * variable named `books`. Each object should have a title and an author
	 * property. The author property should be an object with properties
	 * `firstName` and `lastName`. Be creative and add at least 5 books to the
	 * array
	 *
	 * Example:
	 * > console.log(books[0].title) // "The Salmon of Doubt"
	 * > console.log(books[0].author.firstName) // "Douglas"
	 * > console.log(books[0].author.lastName) // "Adams"
	 */

	// let books = [];
	// 	books[0] = {title:'The Call of Cthulhu', author:{firstName:'H.P.', lastName:'Lovecraft'}}
	// 	books[1]

	let books = [{
		author: {
			firstName: 'H.P.',
			lastName: 'Lovecraft'
		},
		title: ['Call of Cthulhu', 'The Dunwich Horror', 'The History of the Necronomicon']},
			{
		author: {
			firstName: 'Edgar',
			middleName: 'Allen',
			lastName: 'Poe'
		},
		title: ['The Raven', 'The Masque of the Red Death', 'The Tell-Tale Heart']
	}]

	// Alternate Method:

	// let books = [];
	// const book1 = {
	// 	title: 'Book 1',
	// 	author: {
	// 		firstName: '',
	// 		lastName: ''
	// 	}
	// }
	// const book2 = {
	// 	title: 'Book 2',
	// 	author: {
	// 		firstName: '',
	// 		lastName: ''
	// 	}
	// }
	// const book3 = {
	// 	title: 'Book 3',
	// 	author: {
	// 		firstName: '',
	// 		lastName: ''
	// 	}
	// }
	// console.log(books[2].book[3]);


	/**
	 * TODO:
	 * Loop through the books array and output the following information about
	 * each book:
	 * - the book number (use the index of the book in the array)
	 * - the book title
	 * - author's full name (first name + last name)
	 *
	 * Example Console Output:
	 *
	 *      Book # 1
	 *      Title: The Salmon of Doubt
	 *      Author: Douglas Adams
	 *      ---
	 *      Book # 2
	 *      Title: Walkaway
	 *      Author: Cory Doctorow
	 *      ---
	 *      Book # 3
	 *      Title: A Brief History of Time
	 *      Author: Stephen Hawking
	 *      ---
	 *      ...
	 */

	// Method 1:

	let bookNumber = 1

	books.forEach(function(book){
		book.title.forEach(function(title){
			console.log('Book # ' + bookNumber + '\n' +
				'Title: ' + title + '\n' +
				'Author: '+ book.author.firstName +''+ book.author.lastName);
			bookNumber++
		})
	})

	// Method 2:

	// for (let i=0; i < books.length; i++) {
	// 	const book = books[i];
	// 	//console.log(book);
	//
	// 	let outputString = `Book # ${i + 1}
	// 	Title: ${book.title}
	// 	Author: ${book.author.firstName} ${book.author.lastName}
	// 	-------------`;
	//
	// 	console.log(outputString);
	// }


	/**
	 * Bonus:
	 * - Create a function named `createBook` that accepts a title and author
	 *   name and returns a book object with the properties described
	 *   previously. Refactor your code that creates the books array to instead
	 *   use your function.
	 * - Create a function named `showBookInfo` that accepts a book object and
	 *   outputs the information described above. Refactor your loop to use your
	 *   `showBookInfo` function.
	 */

	// Bonus Method 1

	function createBook(bookTitle, bookAuthor) {
		return [{
			author: bookAuthor,
			title: bookTitle
		}];
	}
	createBook('','')

	function showBookInfo(book) {
		book.forEach(function(element) {
			console.log(element.title + element.author);
		})
	}
	showBookInfo(createBook('Title ','Author '));

})();