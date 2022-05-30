import React from 'react'
import Logo from '../imagenes/Logo.svg'
import '../estilos/Navegacion.css'
import Boton from './Boton'
const Navegacion = () => {
  return (
    <header>
      <nav>
        <a href="#"><img src={Logo} alt="" /></a>
        <Boton></Boton>
      </nav>
    </header>
  )
}

export default Navegacion