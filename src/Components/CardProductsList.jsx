import CardProducts from './CardProducts';
import PropTypes from 'prop-types';


function CardProductsList({ products }) {
  return (
    <div className='ProductList'>
      {products.map(product => (
        <CardProducts key={product.id} product={product} />
      ))}
    </div>
  );
}

CardProductsList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    foto: PropTypes.string.isRequired,
    producto: PropTypes.string.isRequired,
    linea: PropTypes.string.isRequired,
    precioNuevo: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    precioViejo: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  })).isRequired
};

export default CardProductsList;
