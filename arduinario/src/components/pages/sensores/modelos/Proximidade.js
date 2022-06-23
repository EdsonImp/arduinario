import React from 'react'
import './Proximidade.css'
import proximidade from "../../../../assets/img/sensores/proximidade.png"
import proximidadeLig from "../../../../assets/img/sensores/proximidade_Ligacao.png"
import proximidadePinos from "../../../../assets/img/sensores/proximidadePinos.png"
import sket from "./sketProximidade.pdf"


export default props => {
    return (
        <div className='container-fluid proximidade'>
            <p className='mt-4'>Sensor de Proximidade</p>

            <img src={proximidade} width="500px" />
            <hr />
            <p>
                O sensor funciona detectando a luz refletida proveniente de seu próprio LED infravermelho.
                Ao medir a quantidade de luz infravermelha refletida, ele pode detectar luz ou escuridão (linhas)
                ou até mesmo objetos diretamente à sua frente. Um LED VERMELHO integrado é usado para indicar a
                presença de um objeto ou linha de detecção. A faixa de detecção é ajustável com resistor variável
                embutido.
                O sensor tem um conector de 3 pinos que se conecta à placa do microcontrolador ou placa Arduino através de fios
                jumper fêmea para fêmea ou fêmea para macho.
                O Sensor Infravermelho Multiuso é um complemento para o seu robô seguidor de linha e robô que evita
                obstáculos que dá ao seu robô a capacidade de detectar linhas ou objetos próximos.
                Contem um orifício de montagem para conectar facilmente um ou mais
                sensores na parte frontal ou traseira do chassi do robô.</p>
            <hr />
            <p>Detalhes </p>
            <img src={proximidadePinos} width="500px" />
            <hr />
            <p>Ligação ao Arduíno</p>
            <img src={proximidadeLig} width="500px" />

            <hr />
            <p>Segue sket para um contador de interrupçao, ou de passagem</p>
            <embed src={sket} width="760" height="500" type='application/pdf' />
        </div>
    )
}