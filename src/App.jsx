import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navegacion from "./components/Navegacion";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartWidget from "./components/CartWidget";
import productos from "./data/productos";

function App() {
  const [carritoItems, setCarritoItems] = useState(() => {

    const storedCarrito = localStorage.getItem("carrito")
    return storedCarrito ? JSON.parse(storedCarrito) : []
  })

  const [filter, setFilter] = useState({
    categoria: "all",
    preciominimo: 0,
  })


  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carritoItems))
  }, [carritoItems])

  const filtrarProductos = () => {
    return productos.filter((producto) => {
      return (
        producto.precio >= filter.preciominimo &&
        (filter.categoria === "all" || producto.categoria === filter.categoria)
      )
    })
  }

  const productosFiltrados = filtrarProductos()

  const agregarAlCarrito = (producto) => {
    setCarritoItems((prevCarrito) => {
      const existItem = prevCarrito.find((item) => item.id === producto.id)
      if (existItem) {
        return prevCarrito.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        )
      } else {
        return [...prevCarrito, { ...producto, cantidad: 1 }]
      }
    })
  }

  const cargarCarrito = (id, cantidad) => {
    setCarritoItems((prevCarrito) =>
      prevCarrito.map((item) =>
        item.id === id ? { ...item, cantidad } : item
      )
    )
  }

  const eliminarCarrito = (id) => {
    setCarritoItems((prevCarrito) => prevCarrito.filter((item) => item.id !== id))
  }

  return (
    <Router>
      <Navegacion changeFilters={setFilter} />
      <Routes>
        <Route
          path="/"
          element={
            <ItemListContainer
              productos={productosFiltrados}
              agregarAlCarrito={agregarAlCarrito}
              carritoItems={carritoItems}
              cargarCarrito={cargarCarrito}
              eliminarCarrito={eliminarCarrito}
            />
          }
        />
        <Route
          path="/category/:categoryId"
          element={
            <ItemListContainer
              productos={productosFiltrados}
              agregarAlCarrito={agregarAlCarrito}
              carritoItems={carritoItems}
              cargarCarrito={cargarCarrito}
              eliminarCarrito={eliminarCarrito}
            />
          }
        />
        <Route
          path="/product/:productId"
          element={<ItemDetailContainer agregarAlCarrito={agregarAlCarrito} />}
        />
        <Route
          path="/cart"
          element={
            <CartWidget
              carritoItems={carritoItems}
              cargarCarrito={cargarCarrito}
              eliminarCarrito={eliminarCarrito}
            />
          }
        />
      </Routes>
    </Router>
  )
}

export default App;