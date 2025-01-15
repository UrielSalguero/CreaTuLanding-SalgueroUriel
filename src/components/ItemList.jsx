import React from "react";

const ItemList = ({ productos, agregarAlCarrito }) => {
  return (
    <div className="productos">
      {productos.length > 0 ? (
        productos.map((producto) => (
          <div className="cardproducto" key={producto.id}>
            <h3>{producto.nombre}</h3>
            <p>{producto.descripcion}</p>
            <p className="precio">${producto.precio}</p>
            <button
              className="btn"
              onClick={() => agregarAlCarrito(producto)} 
            >
              Agregar al Carrito
            </button>
          </div>
        ))
      ) : (
        <p>No hay productos disponibles.</p>
      )}
    </div>
  )
}

export default ItemList;
