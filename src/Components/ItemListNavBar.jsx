import PropTypes from 'prop-types';


export const ItemListContainer = (props) => {
    return (
        <li className={props.seleccionado}><a href={props.link}>{props.texto}</a></li>
    );
};

export default ItemListContainer;

ItemListContainer.propTypes = {
    seleccionado: PropTypes.string.isRequired, // Assuming it's a required string
    link: PropTypes.string.isRequired,         // Assuming it's a required string
    texto: PropTypes.string.isRequired         // Assuming it's a required string
};