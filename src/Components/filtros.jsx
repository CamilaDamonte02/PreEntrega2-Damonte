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
        // Obtén la referencia a Firestore
        const db = getFirestore();

        // Ref a la colección 'Productos'
        const productosCollection = collection(db, 'Productos');

        // Función para obtener categorías y líneas desde Firestore
        const fetchCategoriasYLineas = async () => {
            try {
                const querySnapshot = await getDocs(productosCollection);

                // Mapea los documentos a un array
                const productos = querySnapshot.docs.map((doc) => doc.data());
                
                // Log para verificar la cantidad de documentos recuperados
                console.log(`Se recuperaron ${productos.length} productos desde Firestore.`);

                // Log para verificar los productos obtenidos
                console.log('Productos obtenidos:', productos);

                // Obtiene categorías únicas
                const categoriasSinRepeticion = [...new Set(productos.map((item) => item.categoria))];
                setCategorias(categoriasSinRepeticion);
                
                // Log para verificar las categorías únicas obtenidas
                console.log('Categorías únicas obtenidas:', categoriasSinRepeticion);

                // Obtiene líneas únicas
                const lineasSinRepeticion = [...new Set(productos.map((item) => item.linea))];
                setLineas(lineasSinRepeticion);
                
                // Log para verificar las líneas únicas obtenidas
                console.log('Líneas únicas obtenidas:', lineasSinRepeticion);
            } catch (error) {
                console.error('Error al obtener documentos de Firestore:', error);
            }
        };

        // Llama a la función para obtener los datos
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
                <button onClick={handleButtonClick}>Eliminar Filtros</button>
            </div>
        </div>
    );
};

export default Filtros;
