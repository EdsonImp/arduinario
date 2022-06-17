import './Header.css'
import React from 'react'
import barra from "../../assets/img/barra.png"

export default props =>

<header className="header d-none d-sm-flex flex-column">
    <h1 className="mt-2">
        <i className="fa fa-microchip"></i> Arduinário
    </h1>
     <img className='barra-img' src={barra} alt="barra" />
</header>