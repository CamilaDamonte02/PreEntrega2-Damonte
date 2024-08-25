import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const itemContext = createContext();

export const Provider = ({ children }) => {
    const [productos, setProductos] = useState([]);
    
    const addProduct = (product) => {
        const alreadyExists = productos.some((i) => i.id === product.id);
        if (alreadyExists) {
            const updatedProducts = productos.map((i) => {
                if (i.id === product.id) {
                    return { ...i, cantidad: i.cantidad + product.cantidad };
                } else {
                    return i;
                }
            });
            setProductos(updatedProducts);
        } else {
            setProductos((prev) => [...prev, product]);
        }
    };

    const removeProduct = (id) => {
        const updatedProducts = productos.filter((i) => i.id !== id);
        setProductos(updatedProducts);
    };

    const getTotalQuantity = () => {
        return productos.reduce((total, product) => total + product.cantidad, 0);
    };

    const reset = () => {
        setProductos([]);
    };

    return (
        <itemContext.Provider value={{ productos, addProduct, removeProduct, reset, getTotalQuantity }}>
            {children}
        </itemContext.Provider>
    );
};

Provider.propTypes = {
    children: PropTypes.node.isRequired,
};
