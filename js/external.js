//External file with code to run
"use strict";

//
console.log ("Hello from external JavaScript")

//
alert("Welcome to my website!");

//
let colorInput = prompt('What is your favorite color?');
console.log(colorInput);

alert("Sweet! " + colorInput + " is my favorite color too!");

//Exercise 3A with user interaction added
let numDays = prompt('Movies are $3 a day to rent. How many days are you renting?');
console.log(numDays + ' days');

let moviePrice = numDays * 3

alert("The total cost of your " + numDays + " day movie rental will be " + moviePrice)

//Exercise 3B with user interaction
let googleRate = 400
let amazonRate = 380
let facebookRate = 350

let googleHours = prompt('How many hours did you work for Google this week?');
console.log(googleHours + ' hours at Google');

let amazonHours = prompt('How many hours did you work for Amazon this week?');
console.log(amazonHours + ' hours at Amazon');

let facebookHours = prompt('How many hours did you work for Facebook this week?');
console.log(facebookHours + ' hours at Facebook');

let googlePay = googleHours * googleRate
let amazonPay = amazonHours * amazonRate
let facebookPay = facebookHours * facebookRate

let weeklyIncome = googlePay + amazonPay + facebookPay
console.log('Payout is $' + (googlePay + amazonPay + facebookPay));

alert("Your total payout for this week will be $" + weeklyIncome)

//Exercise 3C with user interaction
let timeInSchedule = confirm("Do you have time in your schedule?")

let roomInClass = confirm("Did the class have room for an additional student?")

alert("it is" + (roomInClass && timeInSchedule));

//
let moreThanTwo= confirm("Do you have more than two items in your cart?")

let offerStillValid = confirm("Is the offer on the product still valid?")

let premiumMember = confirm("Are you a premium member?")

alert("From the looks of your cart and what you've selected" + (moreThanTwo + offerStillValid || premiumMember) + "you get a discount today")