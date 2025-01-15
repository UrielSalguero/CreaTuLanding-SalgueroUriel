import React from "react";
import { Link } from "react-router-dom"; 
import Filters from "./Filters";

const Navegacion = ({ changeFilters }) => {
    return (
        <header className="header">
            <div className="logo">J U cafetería</div>
            <nav className="nav">
                <ul className="lista">
                    <li>
                        <Link to="/" className="item">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/category/all" className="item">Productos</Link>
                    </li>
                    <li>
                        <Link to="/contacto" className="item">Contacto</Link>
                    </li>
                    <Filters onChange={changeFilters} />
                </ul>
            </nav>
        </header>
    )
}

export default Navegacion;