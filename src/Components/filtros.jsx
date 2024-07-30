import { useEffect, useState } from 'react';
import JSON from '../data/ariculosCarpinteria.json'
import { NavLink } from 'react-router-dom';

const Filtros = () => {
    const [categorias, setCategorias] = useState([]);
    const [lineas, setLineas] = useState([]);

    useEffect(() => {
        const categoriasSinRepeticion = [...new Set(JSON.map(item => item.categoria))]
        setCategorias(categoriasSinRepeticion)
    }, [])

    useEffect(() => {
        const lineasSinRepeticion = [...new Set(JSON.map(item => item.linea))]
        setLineas(lineasSinRepeticion)
    }, [])

    return (
        <div className="Filtros">
            <div className="Categoria">
                <p className="CategoriaTitulo">Muebles</p>
                <ul className="SubCategoria">
                    {categorias.map((categoria, index) => (
                        <li key={index}>
                            <NavLink to={`/${categoria}`} className={({ isActive }) => (isActive ? "active" : "")}>
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
                            <NavLink to={`/${linea}`} className={({ isActive }) => (isActive ? "active" : "noActivo")}>
                                {linea}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}


export default Filtros;
