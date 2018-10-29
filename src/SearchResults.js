import React from 'react';

const SearchResults = ({searchResults})=> {

    const results = searchResults.map((term,i)=><li key={i}>{term}</li>);

    return (
        <ul className="search-results">
            <h3>Search Results:</h3>
            {results}
        </ul>
    );
}

export default SearchResults;