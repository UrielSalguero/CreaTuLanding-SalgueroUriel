import React from 'react'
import img1 from "../img/cafeespresso.png"
import img2 from "../img/afogato.png"
import img3 from "../img/cafeleche.png"
import img4 from "../img/capu.png"
import img5 from "../img/cold.png"
import img6 from "../img/latte.png"
import img7 from "../img/moca.png"


const ItemListContainer = ({msj}) => {
    return (
        <>
            <main>
                <div className='fondocafe'>
                    <img src={img1} alt="fondocafe" />
                </div>

                <div className='subtitulo'><h3>Nuestros Productos</h3></div>
                
                <div className='productos'>     
                    <div className='cardproducto'>
                        <img src={img2} alt="afogato" />
                        <div className='textoproducto'>
                            <h3>Affogato de Vainilla</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti fugit hic, debitis iure reiciendis commodi.</p>
                            <p className='precio'>1000$</p>
                            <a href="#" className='btn'>Agregar al Carrito</a>
                        </div>
                    </div>

                    <div className='cardproducto'>
                        <img src={img3} alt="cafeleche" />
                        <div className='textoproducto'>
                            <h3>Café con Leche</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti fugit hic, debitis iure reiciendis commodi.</p>
                            <p className='precio'>800$</p>
                            <a href="#" className='btn'>Agregar al Carrito</a>
                        </div>
                    </div>

                    <div className='cardproducto'>
                        <img src={img4} alt="capu" />
                        <div className='textoproducto'>
                            <h3>Cappuccino</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti fugit hic, debitis iure reiciendis commodi.</p>
                            <p className='precio'>1200$</p>
                            <a href="#" className='btn'>Agregar al Carrito</a>
                        </div>
                    </div>

                    <div className='cardproducto'>
                        <img src={img5} alt="cold" />
                        <div className='textoproducto'>
                            <h3>Café Frío</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti fugit hic, debitis iure reiciendis commodi.</p>
                            <p className='precio'>900$</p>
                            <a href="#" className='btn'>Agregar al Carrito</a>
                        </div>
                    </div>

                    <div className='cardproducto'>
                        <img src={img6} alt="latte" />
                        <div className='textoproducto'>
                            <h3>Latte</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti fugit hic, debitis iure reiciendis commodi.</p>
                            <p className='precio'>1000$</p>
                            <a href="#" className='btn'>Agregar al Carrito</a>
                        </div>
                    </div>

                    <div className='cardproducto'>
                        <img src={img7} alt="moca" />
                        <div className='textoproducto'>
                            <h3>Moca</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti fugit hic, debitis iure reiciendis commodi.</p>
                            <p className='precio'>1100$</p>
                            <a href="#" className='btn'>Agregar al Carrito</a>
                        </div>
                    </div>

                    
                </div>
                
                {msj}   
            </main>
        </>
    )
}

export default ItemListContainer
