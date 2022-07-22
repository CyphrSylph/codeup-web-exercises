/* ARRAY OF QUOTES */
const quotes = [
	{
		img: '<img src="assets/hs6.webp" class=quoteImg alt="hs6">',
		quote: '“By the pricking of my thumbs, something wicked this way comes.”',
		author: 'William Shakespeare, <a href="https://en.wikipedia.org/wiki/Macbeth">Macbeth</a>'
	},
	{
		img: '<img src="assets/hs8.webp" class=quoteImg alt="jalopy1">',
		quote: '“Pleasure to me is wonder—the unexplored, the unexpected, the thing that is hidden and the changeless thing that lurks behind superficial mutability.”',
		author: 'H.P. Lovecraft, <a href="https://en.wikipedia.org/wiki/The_Call_of_Cthulhu">The Call of Cthulhu</a>'
	},
	{
		img: '<img src="assets/hs3.webp" class=quoteImg alt="jalopy1">',
		quote: '“The saddest journey in the world is the one that follows a precise itinerary. Then you\'re not a traveler. You\'re a f**king tourist.”',
		author: 'Guillermo Del Toro, <a href="https://en.wikipedia.org/wiki/Guillermo_del_Toro">Director</a>'
	},
	{
		img: '<img src="assets/hs7.webp" class=quoteImg alt="jalopy1">',
		quote: '“Words have no power to impress the mind without the exquisite horror of their reality.”',
		author: 'Edgar Allen Poe, <a href="https://en.wikipedia.org/wiki/The_Narrative_of_Arthur_Gordon_Pym_of_Nantucket">The Narrative of Arthur Gordon Pym of Nantucket</a>'
	},
	{
		img: '<img src="assets/hs9.webp" class=quoteImg alt="jalopy1">',
		quote: '“The fool doth think he is wise, but the wise man knows himself to be a fool.”',
		author: 'William Shakespeare, <a href="https://en.wikipedia.org/wiki/As_You_Like_It">As You Like It</a>'
	},
	{
		img: '<img src="assets/hs4.webp" class=quoteImg alt="jalopy1">',
		quote: '“The underground of the city is like what\'s underground in people. Beneath the surface, it\'s boiling with monsters.”',
		author: 'Guillermo Del Toro, <a href="https://en.wikipedia.org/wiki/Guillermo_del_Toro">Director</a>'
	},
	{
		img: '<img src="assets/hs5.webp" class=quoteImg alt="jalopy1">',
		quote: '“Believe nothing of what you hear, and only one half that you see.”',
		author: 'Edgar Allan Poe, <a href="https://en.wikipedia.org/wiki/The_System_of_Doctor_Tarr_and_Professor_Fether">The System of Doctor Tarr and Professor Fether</a>'
	},
	{
		img: '<img src="assets/hs1.webp" class=quoteImg alt="jalopy1">',
		quote: '"The oldest and strongest emotion of mankind is fear, and the oldest and strongest kind of fear is fear of the unknown”',
		author: 'H.P. Lovecraft, <a href="https://en.wikipedia.org/wiki/Supernatural_Horror_in_Literature">Supernatural Horror in Literature</a>'
	}
]

// FUNCTION TO SET VIEW OF QUOTES IN ARRAY
export default function quotesView(props) {
	let html = `
		<header id="quotesHeader">
			<h2 id="quotesTitle">.quotes</h2>
			<p id="quotesAbout">featuring art by <a href="https://www.instagram.com/heinzschielmann/?hl=en">Heinz Schielmann</a></p>
		</header>
		<main>
			<div id="my-quotes">
			${addQuotes()}
			</div>
		</main>
	`;
	return html;
}

// MODULAR FUNCTION TO ADD QUOTES FROM ARRAY
function addQuotes() {
	let html = '';
	// FOR OF LOOP TO CYCLE EACH QUOTE IN ARRAY INTO A CARD
	for (const quote of quotes) {
		html += `
			<div class="quoteCard">
				${quote.img}
				<p class="quoteText">${quote.quote}</p>
				<p class="quoteAuthor">${quote.author}</p>
			</div>
		`;
	}
	return html;
}

