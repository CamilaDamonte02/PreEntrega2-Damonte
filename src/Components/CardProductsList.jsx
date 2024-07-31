import Item from './Item';
import PropTypes from 'prop-types';


function CardProductsList({ products }) {
  return (
    <div className='ProductList'>
      {products.map(product => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
}

CardProductsList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  })).isRequired
};

export default CardProductsList;
