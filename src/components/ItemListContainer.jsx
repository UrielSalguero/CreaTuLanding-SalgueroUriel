import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../config/firebaseConfig";
import { useCart } from "../context/CartContext";
import CartWidget from "./CartWidget";
import Filters from "./Filters";

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const { agregarAlCarrito } = useCart();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filtros, setFiltros] = useState({ preciominimo: 0, categoria: "all" });

  useEffect(() => {
    const obtenerProductos = async () => {
      setLoading(true);
      setError(null);
      try {
        const productosRef = collection(db, "productos");
        let consulta = productosRef;

        if (categoryId && categoryId !== "all") {
          consulta = query(productosRef, where("categoria", "==", categoryId));
        }

        const snapshot = await getDocs(consulta);
        if (snapshot.empty) {
          setError("No se encontraron productos para esta categoría.");
          setProductos([]);
        } else {
          const productosData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
          setProductos(productosData);
        }
      } catch (error) {
        console.error("Error obteniendo productos:", error);
        setError("Hubo un problema al obtener los productos.");
      } finally {
        setLoading(false);
      }
    };

    obtenerProductos();
  }, [categoryId]);


  const productosFiltrados = productos.filter(
    (producto) =>
      producto.precio >= filtros.preciominimo &&
      (filtros.categoria === "all" || producto.categoria === filtros.categoria)
  );

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <div className="fondocafe">
        <img src="/src/img/cafeespresso.png" alt="fondocafe" />
      </div>
      <div className="subtitulo">
        <h3>Nuestros Productos</h3>
      </div>


      <Filters onChange={setFiltros} productos={productos} />

      <div className="contenedor">
        {productosFiltrados.length > 0 ? (
          <div className="productos">
            {productosFiltrados.map((producto) => (
              <div className="cardproducto" key={producto.id}>
                <img src={producto.imagen} alt={producto.nombre} />
                <div className="textoproducto">
                  <h3>{producto.nombre}</h3>
                  <p>{producto.descripcion}</p>
                  <p className="precio">${producto.precio}</p>
                  <button className="btn" onClick={() => agregarAlCarrito({ ...producto, cantidad: 1 })}>
                    Agregar al Carrito
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No hay productos disponibles.</p>
        )}
        <div className="CartWidget">
          <CartWidget />
        </div>
      </div>
    </>
  );
};

export default ItemListContainer;
