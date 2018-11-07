import React from 'react';
// import Button from './Button';

const ListItem = props => {
    const {index, text, onDeleteClick, onEditClick, editing, updateTodo, handleChangeTodo} = props;
    return (
        <li>
            {text}
            {/* this logs the index: */}
            <button index={index} value="Delete" onClick={()=>onDeleteClick(index)}>Delete</button>
            <button index={index} value="Edit" onClick={()=>onEditClick(index)}>Edit</button>
            {/* <Button index={index} value="Delete" onClick={onDeleteClick}/> */}

            {/* if editing is true, render a form to allow the update */}
            {editing &&
                <form onSubmit={(e)=>updateTodo(e)}>
                    <input onChange={(event)=>handleChangeTodo(event, index)} placeholder={text}/>
                    <button>Update your todo</button>
                </form> 
            }
        </li>
    );
}
export default ListItem;