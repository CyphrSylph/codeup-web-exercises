(function() {
	"use strict";

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

})();