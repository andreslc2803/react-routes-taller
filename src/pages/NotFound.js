import React from 'react'

const NotFound = () => {
  const imagen = require("../img/error.png")
  return (
    <div>
      <img
        src={imagen}
        alt='Imagen de pagina no encontrada'
        style={{ width: '150px', height: 'auto' }}
      />
    </div>
  )
}

export default NotFound
