import React from 'react';

const Input = ({name, value='', onChange, placeholder=''}) => {
    return (
        <input 
            type="text"
            name={name}
            value={value}
            onChange={onChange}
            autoComplete="off"
            placeholder={placeholder}
        />
    );
}

export default Input;