import React from "react";
import { useParams } from "react-router-dom"; 
import CartWidget from "./CartWidget";

const ItemListContainer = ({ productos, agregarAlCarrito, carritoItems, cargarCarrito, eliminarCarrito }) => {
  const { categoryId } = useParams()

 
  const productosFiltrados = categoryId === "all" || !categoryId
    ? productos // 
    : productos.filter((producto) => producto.categoria === categoryId)

  return (
    <>
      <div className="fondocafe">
        <img src="/src/img/cafeespresso.png" alt="fondocafe" />
      </div>
      <div className="subtitulo">
        <h3>Nuestros Productos</h3>
      </div>
      <div className="contenedor">
        <div className="productos">
          {productosFiltrados.length > 0 ? (
            productosFiltrados.map((producto) => (
              <div className="cardproducto" key={producto.id}>
                <img src={producto.imagen} alt={producto.nombre} />
                <div className="textoproducto">
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
              </div>
            ))
          ) : (
            <p>No hay productos disponibles en esta categoría.</p>
          )}
        </div>
        <div className="CartWidget">
          <CartWidget carritoItems={carritoItems} cargarCarrito={cargarCarrito} eliminarCarrito={eliminarCarrito} />
        </div>
      </div>
    </>
  )
}

export default ItemListContainer;