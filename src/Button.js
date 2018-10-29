import React from 'react';

const Button = (props) => {
    const {value, index} = props;
    return (
        // <button onClick={()=>props.onClick? props.onClick(index) : console.log('no onC')}>{value}</button>
        <button>{value}</button>
    );
}
export default Button;