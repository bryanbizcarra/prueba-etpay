import React from 'react'
import '../estilos/Footer.css'
import Boton from './Boton'
import LOGO from '../imagenes/LOGO.png'
const Footer = () => {
    return (
        <footer>
            <div className='call-to-action'>
                <h2 className='titulo-footer'>Create your event with RegiM</h2>
                <p className='descripcion-footer'>Leveraging our virtual and live event experience, Hubilo offers everything you need to set up your next hybrid event from registration to executing a flawless event.</p>
                <Boton></Boton>
            </div>
            <div className="division">
                <div></div>
                <img className='logo-footer' src={LOGO} alt="" />
                <div></div>
            </div>
            <div className='footer-bajo'>
                <p>© RegiM 2022. Made with love by <span>Landify</span></p>
                <p>For further details, drop a mail to <span>hello@landify.design</span></p>
            </div>
        </footer>
    )
}

export default Footer