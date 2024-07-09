import React from 'react';

export const ItemListContainer = (props) => {
    return (
        <li className={props.seleccionado}><a href={props.link}>{props.texto}</a></li>
    );
};

export default ItemListContainer;