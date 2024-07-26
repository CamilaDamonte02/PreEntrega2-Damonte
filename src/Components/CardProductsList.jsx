import CardProducts from './CardProducts';

function CardProductsList({ products }) {
  return (
    <div  style={{display: 'grid',gridTemplateColumns: 'repeat(3, 1fr)', gap:'1vw', margin: '1vw'}}>
      {products.map(product => (
        <CardProducts key={product.id} product={product} />
      ))}
    </div>
  );
}

export default CardProductsList;
