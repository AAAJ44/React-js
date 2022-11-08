import React from 'react';
import Item from './Item';

const ItemList = ({ items }) => {
    
    return (
        <div className="item-list">
            {items.map((prod) => {
                return <Item prod={items} key={prod.id}/>
            }
            )}
        </div>
    );
};


export default ItemList;