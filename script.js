const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

// Filter fruits based on input string
function search(str) {
	return fruit.filter(item => item.toLowerCase().includes(str.toLowerCase()));
}

function searchHandler(e) {
	const inputVal = input.value.replace(/\s+/g, ' ').trim(); // Remove extra spaces from input
	const results = search(inputVal);
	if(!inputVal) {
		clearSuggestions();
		return;
	}
	showSuggestions(results, inputVal);
}

// Display search results on page
function showSuggestions(results, inputVal) {
	clearSuggestions(); // Clear existing suggestion list

	// Create and append a list item for each result
	results.forEach(item => {
		const regex = new RegExp(`(${inputVal})`, 'i');
		const boldedItem = item
		.split(regex) // Split suggestion into an array of substrings using regex capturing the inputVal
		.map((part) => {
			// Bold matching parts 
			return part.toLowerCase() === inputVal.toLowerCase() ? `<b>${part}</b>` : part;
		})
		.join('');
		
		const newLi = document.createElement('li');
		newLi.innerHTML = boldedItem;
		suggestions.append(newLi);
		suggestions.classList.add('ul-style'); // Add additional styles to non-empty UL 
	});
}

// Fill input field with selected suggestion 
function useSuggestion(e) {
	if(e.target.tagName === 'LI') {
		input.value = e.target.outerText;
		clearSuggestions();
	}
}

// Function to clear suggestion list 
function clearSuggestions() {
	suggestions.innerHTML = '';
	suggestions.className = ''; 
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);