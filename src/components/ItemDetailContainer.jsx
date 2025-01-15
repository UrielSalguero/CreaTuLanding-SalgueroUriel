import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; 
import productos from "../data/productos"; 

const ItemDetailContainer = ({ agregarAlCarrito }) => {
  const { productId } = useParams();
  const [producto, setProducto] = useState(null)

  useEffect(() => {
    
    const fetchProducto = () => {
      const prod = productos.find((p) => p.id === parseInt(productId)) 
      setProducto(prod)
    }

    fetchProducto()
  }, [productId])

  if (!producto) return <p>Cargando producto...</p>

  return (
    <div className="producto-detalle">
      <img src={producto.imagen} alt={producto.nombre} />
      <h2>{producto.nombre}</h2>
      <p>{producto.descripcion}</p>
      <p>${producto.precio}</p>
      <button onClick={() => agregarAlCarrito(producto)}>Agregar al Carrito</button>
    </div>
  )
}

export default ItemDetailContainer;
