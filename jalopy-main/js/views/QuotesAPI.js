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


