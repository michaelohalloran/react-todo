import React from 'react';

const SearchResults = ({input})=> {

    const results = input.map(term=><li>{term}</li>);

    return (
        <ul className="search-results">
            {results}
        </ul>
    );
}

export default SearchResults;