import  { createContext, useState } from 'react';
import PropTypes from 'prop-types';



export const itemContext = createContext();

export const Provider = ( {children} ) => {
    const [productos, setProductos] = useState([])
    const addProduct = (product) =>{
        setProductos(prev => [...prev, product])
    }

    const reset = () =>{
        setProductos([])
    }

    return <itemContext.Provider value={{productos, addProduct, reset}} > {children} </itemContext.Provider>
}

Provider.propTypes = {
    children: PropTypes.node.isRequired,
};