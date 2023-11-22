window.onload= function(){
const autocompleteInput = document.getElementById('autocompleteInput');
const autocompleteSuggestionsElement = document.getElementById('autocompleteSuggestions');

const suggestions = ['Apple', 'Banana', 'Orange', 'Grape', 'Strawberry'];

function filterSuggestions(searchTerm) {
    const filteredSuggestions = suggestions.filter(suggestion => suggestion.toLowerCase().startsWith(searchTerm.toLowerCase()));
    return filteredSuggestions;
}

function updateSuggestions() {
    const searchTerm = autocompleteInput.value.trim();
    const filteredSuggestions = filterSuggestions(searchTerm);

    if (filteredSuggestions.length === 0) {
        autocompleteSuggestionsElement.style.display = 'none';
        return;
    }

    autocompleteSuggestionsElement.style.display = 'block';
    autocompleteSuggestionsElement.innerHTML = '';

    for (const suggestion of filteredSuggestions) {
        const suggestionElement = document.createElement('li');
        suggestionElement.textContent = suggestion;
        suggestionElement.addEventListener('click', () => {
            autocompleteInput.value = suggestion;
            autocompleteSuggestionsElement.style.display = 'none';
        });

        autocompleteSuggestionsElement.appendChild(suggestionElement);
    }
}

autocompleteInput.addEventListener('keyup', updateSuggestions);

};