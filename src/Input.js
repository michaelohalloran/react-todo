import React from 'react';

const Input = ({name, value='', onChange}) => {
    return (
        <input 
            type="text"
            name={name}
            value={value}
            onChange={onChange}
            autoComplete="off"
        />
    );
}

export default Input;