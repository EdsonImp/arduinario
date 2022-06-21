import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'



export default props =>
<aside className="menu-area">
    <nav className="menu">
    <Link to="/">
        <i className='fa fa-home icones'><label>Início</label></i>
    </Link>
    <Link to="/modelos">
        <i class="fa fa-microchip icones"><label>Arduínos</label> </i>
    </Link>

    <Link to="/shields">
        <i class="fa fa-shield icones"><label>Shilds</label> </i>
    </Link>

    <Link to="/sensores">
    <i class="fa fa-rss icones"><label>Sensores</label> </i >
        
    </Link>
    </nav>
</aside>