import React, { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [cantidad, setCantidad] = useState(initial);

  return (
    <div className="item-count">
      <button onClick={() => setCantidad(cantidad - 1)} disabled={cantidad <= 1}>-</button>
      <span>{cantidad}</span>
      <button onClick={() => setCantidad(cantidad + 1)} disabled={cantidad >= stock}>+</button>
      <button onClick={() => onAdd(cantidad)} disabled={stock === 0}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
