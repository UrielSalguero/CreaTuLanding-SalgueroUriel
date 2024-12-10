import React from 'react'
import CartWidget from './CartWidget'

const Navegacion = () => {
    return (
        <>
            <header className='header'>
                <div className='logo'>J U cafetería</div>
                <nav className='nav'>
                    <ul className='lista'>
                        <li><a href="#inicio" className='item'>Inicio</a></li>
                        <li><a href="#productos" className='item'>Productos</a></li>
                        <li><a href="#contacto" className='item'>Contacto</a></li>
                        <CartWidget /> 
                    </ul>
                </nav>

                <div className='barra'>
                    <input type="text"
                        placeholder='Buscar productos...'
                        className='buscar'
                    />
                </div>
                
                   
                
            </header>

        </>
    )
}


export default Navegacion
