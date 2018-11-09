import React from 'react';
import ListItem from './ListItem';


const TodoList = props => {
    const {todos, onDeleteClick,onEditClick, msg, updateTodo, handleChangeTodo, updatingTodoText} = props;
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
            updatingTodoText={updatingTodoText}
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