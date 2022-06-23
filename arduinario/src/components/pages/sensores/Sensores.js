import React, { useState } from 'react'
import Proximidade from './modelos/Proximidade'
import './Sensores.css'
import ImgProximidade from "../../../assets/img/sensores/proximidade.png"
import ImgTemperatura from "../../../assets/img/sensores/Temperatura.png"
import Temperatura from './modelos/Temperatura'


export default props => {
    const [prox, setProx] = useState(true)
    const [temp, setTemp] = useState(false)

    function renderMenu() {
        return (
            <div className='container-fluid menu-sensor'>
                <img src={ImgProximidade} width="80px" onClick={() => {
                    setProx(true)
                    setTemp(false)
                }} />
                <img src={ImgTemperatura} width="80px" onClick={() => {
                    setProx(false)
                    setTemp(true)
                }} />
            </div>
        )
    }


    function renderProximidade() {
        if (prox)
            return (
                <Proximidade />
            )
    }
    function renderTemperatura() {
        if (temp)
            return (
                <Temperatura />
            )
    }


    return (
        <div className='container-fluid'>
            {renderMenu()}
            {renderProximidade()}
            {renderTemperatura()}
        </div>
    )
}