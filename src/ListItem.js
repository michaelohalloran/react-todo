import React from 'react';

const ListItem = props => {
    const {id, text} = props;
    return (
        <div className="list-item">
            {/* ListItem {id+1}: {text} */}
            {text}
        </div>
    );
}
export default ListItem;