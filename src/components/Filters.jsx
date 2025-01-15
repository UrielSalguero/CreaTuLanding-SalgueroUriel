import React from "react";

const Filters = ({ onChange, productos }) => {
  const [preciominimo, setPrecioMinimo] = React.useState(0)

  
  const categorias = productos && Array.isArray(productos)
    ? ["all", "frio", "caliente"]  
    : []

  const handleChangePrecio = (event) => {
    const nuevoPrecio = Number(event.target.value)
    setPrecioMinimo(nuevoPrecio)
    onChange((prevState) => ({
      ...prevState,
      preciominimo: nuevoPrecio,
    }))
  }

  const handleChangeCategoria = (event) => {
    const nuevaCategoria = event.target.value
    onChange((prevState) => ({
      ...prevState,
      categoria: nuevaCategoria,
    }))
  }

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
          <option value="all">Todas</option>
          {categorias.map((categoria) => (
            <option key={categoria} value={categoria}>
              {categoria === "frio" && "cafes frios"}
              {categoria === "caliente" && "cafes calientes"}

              {categoria === "all" && "todos"}
            </option>
          ))}
        </select>
      </div>
    </section>
  )
}

export default Filters; 