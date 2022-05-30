import React from 'react'
import '../estilos/Items.css'
const Items = ({ img, titulo, descripcion }) => {
    return (
        <div className='item'>
            <img src={img} alt="" />
            <h3 className='titulo-item'>{titulo}</h3>
            <p className='descripcion-item'>{descripcion}</p>
        </div>
    )
}

export default Items