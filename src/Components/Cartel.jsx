import PropTypes from 'prop-types';

export const Cartel = ({ nombre, descripcion }) => {
    return (
        <div className="Cartel">
            <h1 className="NombreCartel">{nombre}</h1>
            <div className='DescripcionCartel'>
                <p>{descripcion}</p>
            </div>
        </div>
    );
};

Cartel.propTypes = {
    nombre: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
};

export default Cartel;