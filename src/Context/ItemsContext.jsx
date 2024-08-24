import  { createContext, useState } from 'react';
import PropTypes from 'prop-types';



export const itemContext = createContext();

export const Provider = ( {children} ) => {
    const [productos, setProductos] = useState([])
    
    const addProduct = (product) =>{
        const alreadyExists = product.some((i) => i.id === itemContext.id);
        if (alreadyExists) {
            const transform = product.map((i) =>{
                if(i.id === productos.id) {
                    return {...i, cantidad: i.cantidad + product.cantidad};
                }else{
                    return i;
                }
            });
            setProductos(transform);
       }else{
        setProductos((prev) => [...prev, productos])
       }
    }

    const removeProduct = (id) => {
        const remove = productos.find((i) => i.id !== id);
        setProductos(remove)
    }

    const reset = () =>{
        setProductos([])
    }

    return <itemContext.Provider value={{productos, addProduct,removeProduct, reset}} > {children} </itemContext.Provider>
}

Provider.propTypes = {
    children: PropTypes.node.isRequired,
};