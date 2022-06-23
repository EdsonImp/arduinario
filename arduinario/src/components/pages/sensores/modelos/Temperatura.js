import React from 'react'
import './Proximidade.css'
import temperatura from "../../../../assets/img/sensores/Temperatura.png"


export default props =>{
    return(
    <div>
        <p className='mt-44'>Sensor de temperatura</p>
        
        <img src={temperatura} width="400px" />

        </div>
    )
}