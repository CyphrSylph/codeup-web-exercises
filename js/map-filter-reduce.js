// MAP, FILTER, & REDUCE

//  EXERCISE 1
//  Create a file named map-filter-reduce.js in your js directory and copy the users' data below into it.

const users = [
	{
		id: 1,
		name: 'ryan',
		email: 'ryan@codeup.com',
		languages: ['clojure', 'javascript'],
		yearsOfExperience: 5
	},
	{
		id: 2,
		name: 'luis',
		email: 'luis@codeup.com',
		languages: ['java', 'scala', 'php'],
		yearsOfExperience: 6
	},
	{
		id: 3,
		name: 'zach',
		email: 'zach@codeup.com',
		languages: ['javascript', 'bash'],
		yearsOfExperience: 7
	},
	{
		id: 4,
		name: 'fernando',
		email: 'fernando@codeup.com',
		languages: ['java', 'php', 'sql'],
		yearsOfExperience: 8
	},
	{
		id: 5,
		name: 'justin',
		email: 'justin@codeup.com',
		languages: ['html', 'css', 'javascript', 'php'],
		yearsOfExperience: 9
	}
];


//	EXERCISE 2
// 	Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

const multiLanguage = users.filter(function(user) {
	return user.languages.length >= 3;
});
console.log(multiLanguage);
// User ID's [2,4,5]


//	EXERCISE 3
// 	Use .map to create an array of strings where each element is a user's email address

const emailList = users.map(function (user) {
	return user.email;
});
console.log(emailList);
// Emails ['ryan@codeup.com', 'luis@codeup.com', 'zach@codeup.com', 'fernando@codeup.com', 'justin@codeup.com']


//	EXERCISE 4
//  Use .reduce to get the total years of experience from the list of users.
//  Once you get the total of years you can use the result to calculate the average.

const totalXP = users.reduce((totalYears,user) => {
	console.log("Total years of XP is "+ totalYears); // Logs total years of XP accumulated among all users
	console.log("The user XP is " + user.yearsOfExperience); // Logs total years of XP per user
	return totalYears + user.yearsOfExperience;
}, 0);
console.log('The average years of experience among users is ' + (totalXP/users.length));
// 7


//	EXERCISE 5
// 	Use .reduce to get the longest email from the list of users.

const longestEmail = users.reduce(function(longEmail, user)  {
	console.log('The longest email so far is ' + longEmail) // Log compares number of characters in email
	if(user.email.length > longEmail.length) {
		return user.email;
	}
	return longEmail;
}, '');
console.log('The longest email from the list of users is ' + longestEmail)


//	EXERCISE 6
// 	Use .reduce to get the list of user's names in a single string.
// 	Example: Your instructors are: Ryan, Luis, Zach, Fernando, Justin.

// let allUserNames = users.reduce(function(names,user) {
// 	console.log('All user names so far '+ names);
// });
// allUserNames = allUserNames.substr(0,allUserNames.length-2);
//
// console.log(allUserNames);



//  BONUS EXERCISE
// 	Use .reduce to get the unique list of languages from the list of users.

// let uniqueLanguages = users.reduce(function(languageSet,user) {
// 	for (let language of user.languages) {
// 		languageSet.add(language)
// 	}
// 	return languageSet;
// }, new Set());
// console.log(uniqueLanguages);
// })()