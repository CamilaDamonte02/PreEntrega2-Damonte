import { useContext } from "react";
import { itemContext } from "../Context/ItemsContext";
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore"; // Importa las funciones de Firebase

export const Cart = () => {
    const { productos, reset, removeProduct } = useContext(itemContext);
    const db = getFirestore(); // Inicializa Firestore

    // Función para calcular el total
    const calcularTotal = () => {
        const total = productos.reduce((acc, i) => acc + i.cantidad * i.precio, 0);
        return total;
    };

    // Función para actualizar el stock en Firebase
    const actualizarStock = async () => {
        for (let producto of productos) {
            const productRef = doc(db, "productos", producto.id); // Referencia al documento del producto
            const productSnap = await getDoc(productRef);

            if (productSnap.exists()) {
                const currentStock = productSnap.data().stock; // Stock actual en Firebase
                const newStock = currentStock - producto.cantidad; // Calcula el nuevo stock

                // Actualiza el stock en Firebase
                await updateDoc(productRef, {
                    stock: newStock
                });
            } else {
                console.log("No such document!");
            }
        }
        reset(); // Limpia el carrito después de actualizar el stock
    };

    return (
        <div className="">
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
                            {productos?.map((i) => (
                                <tr key={i.id}>
                                    <td>
                                        <img src={i.foto} alt="" />
                                    </td>
                                    <td>{i.categoria}</td>
                                    <td>${i.precio}</td>
                                    <td>
                                        <div>
                                            <p>{i.cantidad}</p>
                                        </div>
                                    </td>
                                    <td>{i.precio * i.cantidad}</td>
                                    <td>
                                        <div>
                                            <button onClick={() => removeProduct(i.id)} className="BotonEliminar">
                                                <img
                                                    src="https://camiladamonte02.github.io/ProyectoFinal-Damonte/src/assets/icono%20cruz.png"
                                                    alt=""
                                                />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="TotalCompras">
                    <div>
                        <p>Subtotal:</p>
                        <p>${calcularTotal()}</p>
                    </div>
                    <div className="Envio">
                        <p>Envío</p>
                        <p>Gratis</p>
                    </div>
                    <div className="Total">
                        <p>TOTAL</p>
                        <p>${calcularTotal()}</p>
                    </div>
                    <div className="BotonPagar">
                        <button onClick={actualizarStock}>Pagar</button> {/* Llama a actualizarStock al pagar */}
                        <button onClick={() => reset()}>Borrar Todo</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
