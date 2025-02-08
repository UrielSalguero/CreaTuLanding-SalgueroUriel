import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { collection, addDoc, doc, updateDoc, getDoc } from "firebase/firestore";
import { db, auth } from "../config/firebaseConfig";

const CartWidget = () => {
  const { carrito, actualizarCantidad, eliminarDelCarrito, vaciarCarrito } = useCart();
  const [mostrarCheckout, setMostrarCheckout] = useState(false);
  const [formData, setFormData] = useState({ nombre: "", email: "", direccion: "" });

  const total = carrito.reduce((tot, item) => tot + item.precio * item.cantidad, 0);
  const totalUnidades = carrito.reduce((acc, item) => acc + item.cantidad, 0);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleComprar = async (e) => {
    e.preventDefault();
    if (!auth.currentUser) return alert("Debes iniciar sesión para comprar.");
    if (carrito.length === 0) return alert("El carrito está vacío");
    if (!window.confirm("¿Confirmas tu compra?")) return;

    try {
      for (const item of carrito) {
        const productRef = doc(db, "productos", item.id);
        const productSnap = await getDoc(productRef);
        if (productSnap.exists() && productSnap.data().stock < item.cantidad) {
          return alert(`Stock insuficiente para ${item.nombre}. Disponible: ${productSnap.data().stock}`);
        }
      }

      const order = { comprador: formData, productos: carrito, total, fecha: new Date() };
      const docRef = await addDoc(collection(db, "ordenes"), order);
      alert(`Gracias por tu compra. Orden: ${docRef.id}`);

      for (const item of carrito) {
        const productRef = doc(db, "productos", item.id);
        await updateDoc(productRef, { stock: (await getDoc(productRef)).data().stock - item.cantidad });
      }
      vaciarCarrito();
      setMostrarCheckout(false);
      setFormData({ nombre: "", email: "", direccion: "" });
    } catch (error) {
      console.error("Error al crear la orden:", error);
    }
  };

  return (
    <div className="contenedor-carrito">
      <h3>Carrito</h3>
      {carrito.length > 0 ? (
        <>
          {carrito.map((item) => (
            <div key={item.id} className="carrito-item">
              <img src={item.imagen} alt={item.nombre} className="carrito-imagen" />
              <div className="carrito-contenido">
                <h3>{item.nombre}</h3>
                <p>Precio: ${item.precio.toFixed(2)}</p>
                <div className="carrito-act">
                  <button onClick={() => actualizarCantidad(item.id, item.cantidad - 1)} disabled={item.cantidad <= 1}>-</button>
                  <span>{item.cantidad}</span>
                  <button onClick={() => actualizarCantidad(item.id, item.cantidad + 1)}>+</button>
                  <button className="remove-btn" onClick={() => eliminarDelCarrito(item.id)}>Eliminar</button>
                </div>
              </div>
            </div>
          ))}
          <div className="cart-summary">
            <h3>Total Unidades: {totalUnidades}</h3>
            <h3>Total: ${total.toFixed(2)}</h3>
          </div>
          <div className="cart-actions">
            <button onClick={() => window.confirm("¿Vaciar carrito?") && vaciarCarrito()}>Vaciar Carrito</button>
            <button onClick={() => setMostrarCheckout(!mostrarCheckout)}>Comprar</button>
          </div>
          {mostrarCheckout && (
            <div className="checkout-form">
              <h3>Finalizar Compra</h3>
              <form onSubmit={handleComprar}>
                <input type="text" name="nombre" placeholder="Nombre" onChange={handleInputChange} value={formData.nombre} required />
                <input type="email" name="email" placeholder="Email" onChange={handleInputChange} value={formData.email} required />
                <input type="text" name="direccion" placeholder="Dirección" onChange={handleInputChange} value={formData.direccion} required />
                <button type="submit">Confirmar Compra</button>
              </form>
            </div>
          )}
        </>
      ) : (
        <p>No hay productos en el carrito</p>
      )}
    </div>
  );
};

export default CartWidget;


