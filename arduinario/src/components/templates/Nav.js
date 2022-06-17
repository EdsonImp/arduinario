import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'


export default props =>
<aside className="menu-area">
    <nav className="menu">
    <Link to="/">
        <i className='fa fa-home icones'> Início</i>
    </Link>
    <Link to="/modelos">
        <i class="fa fa-microchip icones"> Arduínos</i>
    </Link>
    </nav>
</aside>