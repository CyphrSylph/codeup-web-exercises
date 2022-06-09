(function(){
	"use strict";

	let planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";

	/**
	 * TODO:
	 * Convert planetsString to an array, and save it in the variable named
	 * planetsArray.
	 * console.log planetsArray to check your work
	 */

	let planetsArray = planetsString.split('|');
	console.log(planetsArray);

	/**
	 * TODO:
	 * Create a string with <br> tags between each planet. console.log() your
	 * results. Why might this be useful?
	 *
	 * BONUS:
	 * Create another string that would display your planets in an unordered
	 * list. You will need an opening AND closing <ul> tags around the entire
	 * string, and <li> tags around each planet.
	 */

	let planetsSecondString = planetsArray.join('<br>'); // With Break Tags
	console.log(planetsSecondString);

	let planetsThirdString = planetsArray.join('\n'); // With Line Breaks
	console.log(planetsThirdString);

	// BONUS EXERCISE
	planetsArray.forEach(function(planet, index) {
		planetsArray[index] = '<li>' + planet + '</li>'
	})
	console.log(planetsArray);

	planetsArray.unshift('<ul>')
	console.log(planetsArray);

	planetsArray.push('</ul>')
	console.log(planetsArray);

	let planetsBonusString = planetsArray.join('\n')
	console.log(planetsBonusString);

})();