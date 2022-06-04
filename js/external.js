"use strict";

//Task 6:
//Add a console.log message in external.js that says "Hello from external JavaScript".

    console.log("Hello from external JavaScript")


//Exercise 1:
//Use the alert function to show a message that says 'Welcome to my Website!'.

    alert("Welcome to my website!");


//Exercise 2:
//Use a prompt to ask for the user's favorite color.
//Use the user's response to alert a message that says that the color entered is your favorite color too.

    let colorInput = prompt('What is your favorite color?');
    console.log(colorInput);

        alert("Sweet! " + colorInput + " is my favorite color too!");


//Exercise 3A:
//You have rented some movies for your kids: The little mermaid (for 3 days),
// Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it).
// If price for a movie per day is $3, how much will you have to pay?

    let numDays = prompt('Movies are $3 a day to rent. How many days are you renting?');
    console.log(numDays + ' days');

    let moviePrice = numDays * 3

        alert("The total cost of your " + numDays + " day movie rental will be " + moviePrice);


//Exercise 3B:
//Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour.
//Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week?
//You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

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

        alert("Your total payout for this week will be $" + weeklyIncome);


//Exercise 3C:
//A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.

    let timeInSchedule = confirm("Do you have time in your schedule?");

    let roomInClass = confirm("Did the class have room for an additional student?");

        alert(roomInClass && timeInSchedule);


//Exercise 3D:
// A product offer can be applied only if a person buys more than 2 items, and the offer has not expired.
// Premium members do not need to buy a specific amount of products.

    let itemAmount = confirm("Do you have more than two items in your cart?");

    let offerStillValid = confirm("Is the offer on the product still valid?");

    let premiumMember = confirm("Are you a premium member?");

        alert("From the looks of your cart and selections you get a discount today! " + (itemAmount + offerStillValid || premiumMember));