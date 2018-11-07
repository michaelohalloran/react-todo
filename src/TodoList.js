import React from 'react';
import ListItem from './ListItem';


const TodoList = props => {
    const {todos, onDeleteClick,onEditClick, msg, updateTodo, handleChangeTodo} = props;
    const items = todos.map((todo,index)=> (
        <ListItem 
            key={index} 
            index={index}
            id={todo.id} 
            onDeleteClick ={onDeleteClick}
            onEditClick ={onEditClick}
            editing={todo.editing}
            text={todo.text}
            updateTodo={updateTodo} 
            handleChangeTodo={handleChangeTodo}
        />
    ));
    
    let errorMsg = msg ? msg : null;
    
    return (
        <ul className="todo-list">
            {errorMsg}
            {items}
        </ul>
    );

}
export default TodoList;