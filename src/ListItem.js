import React from 'react';
// import Button from './Button';

const ListItem = props => {
    const {index, text, onDeleteClick} = props;
    return (
        <li>
            {text}
            {/* this logs the index: */}
            <button index={index} value="Delete" onClick={()=>onDeleteClick(index)}>Del</button>
            
            {/* <Button index={index} value="Delete" onClick={onDeleteClick}/> */}
        </li>

    );
}
export default ListItem;