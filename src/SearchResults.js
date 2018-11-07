import React from 'react';

const SearchResults = ({searchResults})=> {

    //searchResults is a todo object; display just the search term's text
    const results = searchResults.map((term,i)=><li key={i}>{term.text}</li>);

    return (
        <ul className="search-results">
            <h3>Search Results:</h3>
            {results}
        </ul>
    );
}

export default SearchResults;