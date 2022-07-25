import createView from "../createView.js";

// FUNCTION TO SET VIEW OF QUOTES FROM API
export default function quotesAPIView(props) {
	let html = `
		<header id="quotesHeader">
			<h2 id="quotesTitle">.quotesAPI</h2>
			<p id="quotesAbout">featuring an imported quote selection from docRob</a></p>
		</header>
		<main>
			<div id="my-quotesAPI">
				${addQuotes(props.quotes)}
				<div id="new-quote-div">
					<input placeholder="Enter new quote here..." id="newQuoteText">
<!--					<input placeholder="Add the author here..." id="newAuthorText">-->
					<button id="addBtn" type="button" value="+">+</button>
				</div>
			</div>
		</main>
	`;
	return html;
}

// MODULAR FUNCTION TO ADD QUOTES FROM API
function addQuotes(quotes) {
	let html = '';
	// FOR OF LOOP TO CYCLE EACH QUOTE IN ARRAY INTO A CARD
	for (const quote of quotes) {
		html += `
				<div class="quoteAPICard">
					<p class="quoteText">${quote.quote}</p>
					<p class="quoteAuthor">${quote.author}</p>
				</div>
		`;
	}
	return html;
}

// FUNCTION TO ADD A NEW QUOTE FROM TEXT INPUT
export function addNewQuoteEvent() {
const addBtn = document.querySelector('#addBtn');
addBtn.addEventListener('click', addNewQuote);
}

function addNewQuote() {
	// USE .trim() TO TRIM WHITESPACE FROM A TEXT INPUT WHEN VALIDATING
	const quoteInput = document.querySelector('#newQuoteText');
	const quote = quoteInput.value.trim();
	// const authorInput = document.querySelector('#newAuthorText');
	// const author = authorInput.value.trim();
	if (quote.length < 1) {
		// ADD ALERT OF SHAKE FUNCTION HERE FOR VALIDATION
		quoteInput.classList.add('animate__animated', 'animate__shakeX', 'inputError');
		console.log('error');
		return;
	}
	// if (author.length > 1) {
	// 	authorInput.value = 'Anonymous';
	// 	console.log('error');
	// 	return;
	// }
	const requestOpts = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': QUOTES_API_KEY
		},
		// CONVERT OBJECT INTO STRING ELEMENT FOR FETCH REQUEST
		body: JSON.stringify([{quote}])
	}
	fetch('https://quotes.fulgentcorp.com:12250/v1/quotes?random=true&limit=5', requestOpts)
		.then(function (response) {
			if (!response.ok) {
				// LOG ERROR FOR QUOTE
			} else {
				// ADD QUOTE & REDIRECT WITHIN VIEW
				createView('/quotesAPI');
			}
		});
}

