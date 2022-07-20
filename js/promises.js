/* TODO: Create a file named promises.js inside your js directory and link it to an HTML file of your choice.*/
// JS LINKED TO PROMISES.HTML

/* TODO: Generate a Personal Access Token for the GitHub API. We will use this so that we don't get rate limited when talking to the GitHub API. You can add the token to your requests like this: */
// TOKEN ADDED TO KEYS.JS

/* TODO: Create a function that accepts a GitHub username, and returns a promise that resolves returning just the date of the last commit that user made. Reference the gitHub api documentation to achieve this.*/
(async function() {
	const options = {
		headers: {
			'Authorization': 'gitHubAPIKey'
		}
	}
	function lastCommitByUser(username) {
		return fetch(`https://api.github.com/users/${username}/events/public`,options)
			.then(function (response) {
				return response.json()
			})
			.then(function(events) {
				// ITERATE OVER EVENTS AND RETURN TYPE created_at FOR THE FIRST EVENT OF TYPE PushEvent
				// A for of LOOP IS USED SINCE WE ARE RETURNING ONLY THE FIRST EVENT [A forEach CANNOT BE BROKEN]
				for (let event of events) {
					if(event.type === 'PushEvent') {
						return event.created_at;
					}
				}
			})
	}
	const lastCommit = await lastCommitByUser('kmaalig');
	console.log(lastCommit);
})();

/* TODO: Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.*/
function wait(sumNum) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (Math.random() > 0.1) {
				// RESOLVED PASSED VALUE FOR .THEN CALLBACK FUNCTION
				resolve('Here is your data: ...');
			} else {
				// RESOLVED PASSED VALUE FOR .THEN CALLBACK FUNCTION
				reject('Network Connection Error!');
			}
		}, sumNum);
	});
}

/* TODO: As a bonus make sure the promise resolves with the milliseconds in return, so you can make the console log message more dynamic. */
const request = wait(3300); // SET TIMEOUT FOR 3300 MILLISECONDS
console.log(request); // PENDING PROMISE
request.then(resolve => console.log('Promise resolved!', resolve));
// IF RESOLVED, LOG: "Promise resolved!" and "Here is your data: ..."
request.catch(reject => console.log('Promise rejected!', reject));
// IF REJECTED, LOG : "Promise rejected!" and "Network Connection Error!"