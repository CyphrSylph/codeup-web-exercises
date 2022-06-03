
"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
// function analyzeColor(colorName) {
//     if (colorName === 'Red') {
//         console.log('Red pigment was made from ochre in prehistoric art.');
//     } else if (colorName === 'Orange') {
//         console.log('Orange comes from a photosynthetic pigment called carotenes.');
//     } else if (colorName === 'Yellow') {
//         console.log('The Egyptians made Yellow with a mix of ochre and orpiment.');
//     } else if (colorName === 'Green') {
//         console.log('The Greeks introduced verdigris, the first artificial green pigment.');
//     } else if (colorName === 'Blue') {
//         console.log('The first blue pigment was a natural mineral called azurite.');
//     } else if (colorName === 'Indigo') {
//         console.log('Indigo pigment is created by extracting leaves of the plant Indigofera tinctoria.');
//     } else if (colorName === 'Violet') {
//         console.log('The first violet pigment was prepared with cobalt in 1859.');
//     } else {
//         console.log("Hmm, it seems I can't locate that color in the codex.");
// }}
// analyzeColor('Violet');

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
//let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
//let randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
//analyzeColor(randomColor);

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
// function analyzeColor(colorName) {
//
//     switch(colorName) {
//         case "Red":
//             console.log('Red pigment was made from ochre in prehistoric art.');
//             break;
//         case "Orange":
//             console.log('Orange comes from a photosynthetic pigment called carotenes.');
//             break;
//         case "Yellow":
//             console.log('The Egyptians made Yellow with a mix of ochre and orpiment.');
//             break;
//         case "Green":
//             console.log('The Greeks introduced verdigris, the first artificial green pigment.');
//             break;
//         case "Blue":
//             console.log('The first blue pigment was a natural mineral called azurite.');
//             break;
//         case "Indigo":
//             console.log('Indigo pigment is created by extracting leaves of the plant Indigofera tinctoria.');
//             break;
//         case "Violet":
//             console.log('The first violet pigment was prepared with cobalt in 1859.');
//             break;
//         default:
//             console.log("Hmm, it seems I can't locate that color in the codex.");
//             break;
//     }}

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
// let colorName = prompt('Chose a color from the Visible Color Spectrum:')
// analyzeColor(colorName);

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
// function calculateTotal(luckyNumber,totalAmount) {
//     if (luckyNumber === 0) {
//         alert("Oh no!, It seems you're out of luck. We don't have a discount for you today.")
//     } else if (luckyNumber === 1) {
//         alert('Your lucky number is 1! A 10% discount will be applied to your cart for a total of ' + (totalAmount - (totalAmount *(.10))))
//     } else if (luckyNumber === 2) {
//         alert('Your lucky number is 2! A 25% discount will be applied to your cart for a total of ' + (totalAmount - (totalAmount *(.25))))
//     } else if (luckyNumber === 3) {
//         alert('Your lucky number is 3! A 35% discount will be applied to your cart for a total of ' + (totalAmount - (totalAmount *(.35))))
//     } else if (luckyNumber === 4) {
//         alert('Your lucky number is 4! A 50% discount will be applied to your cart for a total of ' + (totalAmount - (totalAmount *(.50))))
//     } else if (luckyNumber === 5) {
//         alert('HUZZAH!, Your lucky number is 5. Your entire cart will be FREE today!')
// }}
//calculateTotal(4,50);

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// let luckyNumber = Math.floor(Math.random() * 6);
// let totalAmount = prompt("It looks like you're ready for checkout! Let us know your cart total and we'll see if it's your lucky day for a discount:");
// calculateTotal(luckyNumber,totalAmount);

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
//i. Set up confirm to ask user to input number
//ii. If "Ok", prompt for number. If "No", do nothing.
//iii. Set three alerts based on numerical user input
//iv. Set an alert for when the user inputs something other than a number
//v. Refactor code to use function byt adjusting prompt value


function numGame () {

    let confirmed = confirm('Would you like to play a numbers game?');

    if (confirmed === true){ // User selected "Ok"
        let userInput = parseFloat(prompt('Enter a number:'));
        if(isNaN(userInput) === false) { // User gave number
            if(userInput % 2 === 0) {
                alert(userInput + ' is even.');
            } else {
                alert(userInput + ' is odd.');
            }
            alert(userInput + ' plus 100 is ' + (userInput + 100) + '.');
            if(userInput >= 0) {
                alert(userInput + ' is a positive number.' );
            } else {
                alert(userInput + ' is a negative number.');
            }
        } else {
            alert('Sorry, That is not a valid number.');
        }
    } else {
        alert('Okay, maybe next time.');
    }}

numGame();
