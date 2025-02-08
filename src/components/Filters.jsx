import React, { useState } from "react";

const Filters = ({ onChange }) => {
  const [preciominimo, setPrecioMinimo] = useState(0);
  const categorias = ["all", "frio", "caliente"];

  const handleChangePrecio = (event) => {
    const nuevoPrecio = Number(event.target.value);
    setPrecioMinimo(nuevoPrecio);
    onChange(prevState => ({ ...prevState, preciominimo: nuevoPrecio }));
  };

  const handleChangeCategoria = (event) => {
    onChange(prevState => ({ ...prevState, categoria: event.target.value }));
  };

  return (
    <section className="filters">
      <div>
        <label htmlFor="precio">Precio mínimo</label>
        <input
          type="range"
          id="precio"
          min="0"
          max="2000"
          value={preciominimo}
          onChange={handleChangePrecio}
        />
        <span>${preciominimo}</span>
      </div>
      <div>
        <label htmlFor="categoria">Categorías</label>
        <select id="categoria" onChange={handleChangeCategoria}>
          {categorias.map(categoria => (
            <option key={categoria} value={categoria}>
              {categoria === "frio" ? "Cafés fríos" : categoria === "caliente" ? "Cafés calientes" : "Todos"}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
};

export default Filters;
