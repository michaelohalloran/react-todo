import React from 'react';
import Input from './Input';


const SearchForm = ({name, searchText, onSearch}) => (
    <Input 
        name={name}
        value={searchText}
        onChange={onSearch}
        placeholder="Type your search term"
    />
);

export default SearchForm;