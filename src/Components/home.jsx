<div  className='tienda body' >
    <img className='Portada' src='https://camiladamonte02.github.io/PreEntrega2-Damonte/src/assets/portadaTienda.png' ></img>
    <h1 className="titulo-tienda">Tienda</h1>
    <div className="contenido-tienda">
    <Filtros />
    <div className='cardProductListContainer'>
        <CardProductsList products={products}/>
    </div>
    </div>
</div>