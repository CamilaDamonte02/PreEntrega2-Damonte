export const Cart = () => {
    return <div className="">
        <h1 className="titulo-tienda">Tu carrito</h1>
        <div className="PaginaListaCompras">
            <div className="ListaCompras">
        <table className="TablaListaCompras">
            <thead>
                <tr>
                    <th colSpan="2">Producto</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th colSpan="2">Total</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><img src="https://camiladamonte02.github.io/ProyectoFinal-Damonte/src/assets/FotosMuebles/2.png" alt="" /></td>
                    <td>Escritorio línea Rústico Encanto</td>
                    <td>$7.990</td>
                    <td>
                        <div>
                            <button>-</button>
                            <p>2</p>
                            <button>+</button>
                        </div>
                    </td>
                    <td>$15.980</td>
                    <td><div><button className="BotonEliminar">X</button></div></td>
                </tr>
            </tbody>
        </table>
            </div>
            <div className="TotalCompras">
                <div>
                    <p>Subtotal:</p>
                    <p>$14.416</p>
                </div>
                <div>
                    <p>Envío</p>
                    <p>Gratis</p>
                </div>
                <div>
                    <p>TOTAL</p>
                    <p>$14.416</p>
                </div>
                <button>Comprar</button>
            </div>
        </div>
    </div>
}