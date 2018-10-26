import React from 'react';
import ListItem from './ListItem';
import Button from './Button';


const List = props => {
    const {todos, onDeleteClick} = props;
    const items = todos.map((todo,i)=> {
        return (
            <div onClick={onDeleteClick} key={i}>
                <ListItem 
                    id={i} 
                    text={todo}
                />
                <Button 
                    value="Delete" 
                    // onClick={onDeleteClick}
                />
            </div>
        );
});
    
    return (
        <div>List:
            {items}
        </div>
    );
}
export default List;