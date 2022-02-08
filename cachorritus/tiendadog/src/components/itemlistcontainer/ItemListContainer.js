import React from 'react';
import ItemCount from './ItemCount';


const ItemListContainer= () => {
    return (
        <div><h3>Todo lo que busca para su mascota lo encuentra en Cachorritus</h3>
        <ItemCount stock={10}></ItemCount>
        <ItemCount stock={10}></ItemCount>
        <ItemCount stock={10}></ItemCount>
        
        </div>
        
    )
}

export default ItemListContainer;
