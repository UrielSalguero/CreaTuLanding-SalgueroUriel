import React from 'react';

const CartWidget = ({ carritoItems = [], cargarCarrito, eliminarCarrito }) => {
  const total = carritoItems.reduce((tot, item) => tot + item.precio * item.cantidad, 0)

  return (
    <div className="contenedor-carrito">
      <h3>Carrito</h3>
      {carritoItems.length > 0 ? (
        carritoItems.map((item) => (
          <div key={item.id} className="carrito-item">
            <img src={item.imagen} alt={item.nombre} className="carrito-imagen" />
            <div className="carrito-contenido">
              <h3>{item.nombre}</h3>
              <p>${item.precio.toFixed(2)}</p>
              <div className="carrito-act">
                <button
                  onClick={() => cargarCarrito(item.id, item.cantidad - 1)}
                  disabled={item.cantidad <= 1}
                >
                  -
                </button>
                <span>{item.cantidad}</span>
                <button
                  onClick={() => cargarCarrito(item.id, item.cantidad + 1)}
                >
                  +
                </button>
                <button
                  className="remove-btn"
                  onClick={() => eliminarCarrito(item.id)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No hay productos en el carrito</p>
      )}
      {carritoItems.length > 0 && (
        <div className="total-carrito">
          <h3>Total: ${total.toFixed(2)}</h3>
        </div>
      )}
    </div>
  )
}

export default CartWidget;