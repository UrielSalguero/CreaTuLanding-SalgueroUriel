import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebaseConfig";
import ItemCount from "./ItemCount";
import { useCart } from "../context/CartContext";

const ItemDetailContainer = () => {
  const { productId } = useParams()
  const { agregarAlCarrito } = useCart()
  const [producto, setProducto] = useState(null)
  const [cantidadSeleccionada, setCantidadSeleccionada] = useState(0)

  useEffect(() => {
    const obtenerProducto = async () => {
      try {
        const docSnap = await getDoc(doc(db, "productos", productId))
        setProducto(docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } : null)
      } catch (error) {
        console.error("Error obteniendo producto:", error)
        setProducto(null)
      }
    }

    obtenerProducto()
  }, [productId])

  const onAdd = (cantidad) => {
    if (producto) {
      setCantidadSeleccionada(cantidad)
      agregarAlCarrito({ ...producto, cantidad })
    }
  }

  if (!producto) return <p>Producto no encontrado.</p>

  return (
    <div className="producto-detalle">
      <img src={producto.imagen} alt={producto.nombre} />
      <h2>{producto.nombre}</h2>
      <p>{producto.descripcion}</p>
      <p className="precio">${producto.precio}</p>

      {producto.stock > 0 ? (
        cantidadSeleccionada === 0 ? (
          <ItemCount stock={producto.stock} initial={1} onAdd={onAdd} />
        ) : (
          <p className="agregado">Producto agregado al carrito.</p>
        )
      ) : (
        <p className="sin-stock">Producto sin stock.</p>
      )}
    </div>
  )
}

export default ItemDetailContainer;