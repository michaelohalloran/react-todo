import React from 'react';
import ListItem from './ListItem';


const TodoList = props => {
    const {todos, onDeleteClick,msg} = props;
    const items = todos.map((todo,index)=> (
        <ListItem key={index} index={index} onDeleteClick ={onDeleteClick} text={todo}/>
    ));
    
    let errorMsg = msg ? msg : null;
    
    return (
        <ul>
            {errorMsg}
            {items}
        </ul>
    );

}
export default TodoList;