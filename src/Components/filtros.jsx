import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const Filtros = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/');
    };

    const [categorias, setCategorias] = useState([]);
    const [lineas, setLineas] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const productosCollection = collection(db, 'Productos');
        const fetchCategoriasYLineas = async () => {
            try {
                const querySnapshot = await getDocs(productosCollection);

                const productos = querySnapshot.docs.map((doc) => doc.data());
                
                console.log(`Se recuperaron ${productos.length} productos desde Firestore.`);

                console.log('Productos obtenidos:', productos);

                const categoriasSinRepeticion = [...new Set(productos.map((item) => item.categoria))];
                setCategorias(categoriasSinRepeticion);
                
                console.log('Categorías únicas obtenidas:', categoriasSinRepeticion);

                const lineasSinRepeticion = [...new Set(productos.map((item) => item.linea))];
                setLineas(lineasSinRepeticion);
                
                console.log('Líneas únicas obtenidas:', lineasSinRepeticion);
            } catch (error) {
                console.error('Error al obtener documentos de Firestore:', error);
            }
        };

        fetchCategoriasYLineas();
    }, []);

    return (
        <div className="Filtros">
            <div className="Categoria">
                <p className="CategoriaTitulo">Muebles</p>
                <ul className="SubCategoria">
                    {categorias.map((categoria, index) => (
                        <li key={index}>
                            <NavLink
                                to={`/${`category/${categoria}`}`}
                                className={({ isActive }) => (isActive ? 'active' : '')}
                            >
                                {categoria}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="Categoria">
                <p className="CategoriaTitulo">Líneas</p>
                <ul className="SubCategoria">
                    {lineas.map((linea, index) => (
                        <li key={index}>
                            <NavLink
                                to={`/${`linea/${linea}`}`}
                                className={({ isActive }) => (isActive ? 'active' : 'noActivo')}
                            >
                                {linea.replace(/_/g, ' ')}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="BotonFiltros">
                <button onClick={handleButtonClick} style={{color:'black' }}>Eliminar Filtros</button>
            </div>
        </div>
    );
};

export default Filtros;
