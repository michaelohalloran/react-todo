import React from 'react';
import Input from './Input';

const AddTodoForm = props=> (
    
    <form onSubmit={props.onSubmit}>
        <Input 
            name="todos"
            value={props.value}
            onChange={props.onChange}
        />
        <button>Add todo</button>
    </form>
);

export default AddTodoForm;