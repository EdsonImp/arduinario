import React, { useState } from "react";
import './Arduino.css'
import Pinagens from "./ArduinosPinagens"
import Main from "../../templates/Main"
import Instalacao from "./Instalacao"
import uno from "../../../assets/img/modelos/Arduino-Uno.png"
import leonardo from "../../../assets/img/modelos/Arduino-Leonardo.png"
import lilypad from "../../../assets/img/modelos/Arduino-Lilypad.png"
import mega from "../../../assets/img/modelos/Arduino-Mega.png"
import nano from "../../../assets/img/modelos/Arduino-Nano.png"
import pro from "../../../assets/img/modelos/Arduino-Pro-Micro.png"
import promini from "../../../assets/img/modelos/Arduino-Pro-Mini.png"




export default propos => {
const [models, setModels] = useState(true)
const [pinagens, setPinagens] = useState(false)
const [instalacao, setInstalacao] = useState(false)

function renderInstalacao(){
    if(instalacao){ 
    return(
        <Instalacao/>
    )
}    }

function renderPinagens(){
    if(pinagens){ 
    return(
        <Pinagens/>
    )
}    }

function  renderModelos() {
    if(models){ 
            return( 
<div className=" arduino container-fluid" >

   
    <div className="modelos" >
          <img src={uno} alt="uno" className="images"></img>
    <p> Arduino Uno é uma placa baseada em torno do microcontrolador ATmega328P. Ela possui 14 pinos digitais de entrada e saída
         (dos quais 6 podem ser usados como saídas PWM), 6 entradas analógicas, ela funciona em uma frequência de 16 MHz, se comunica a partir de uma conexão USB, 
         possui um conector de alimentação de energia, um conector ICSP e um botão reset. Para utilizá-la, basta conectá-la ao computador utilizando um cabo USB ou
         alimentá-la através de uma bateria ou um adaptador de alimentação AC-DC.</p>
    </div>
    
    <div className="modelos" >
    <img src={leonardo} alt="leonardo" className="images"></img>
    <p>O Arduino Leonardo foi uma adição à família Arduino que trouxe consigo novas características e funcionalidades ao mundo de projetos eletrônicos. 
        O microcontrolador utilizado nesta placa é o ATmega32u4, ao invés do ATmega328, geralmente utilizado em placas mais antigas, como o próprio Arduino Uno.
         Uma vantagem desta placa é sua maior quantidade de pinos analógicos (12 pinos), digitais (20 pinos) e de PWM (7 pinos). O ATmega32u4 também possui uma comunicação USB embutida,
          que elimina a necessidade de um processador secundário utilizado exclusivamente para cuidar desse tipo de comunicação.

Uma outra características super útil desta placa é sua capacidade de emular dispositivos USB como mouses, teclados e outros periféricos em seu computador. </p>
        </div>

        <div className="modelos" >
    <img src={lilypad} alt="uno" className="images"></img>
    <p>O Lilypad Arduino é uma placa arduino especialmente desenvolvida para aplicações em vestuário e tecidos inteligentes, pois pode ser costurado sobre o tecido e conectado a diversos
         componentes como sensores e LEDs. A placa é baseada no ATmega328P e já vem com o bootloader gravado, que somente é disparado quando o botão de reset é pressionado. Seu design achatado
          ajuda muito em aplicações onde muitas vezes precisamos esconder o microcontrolador.</p>
        </div>

        <div className="modelos" >
        <img src={mega} alt="mega" className="images"></img>
        <p>O Arduino Mega possui basicamente as mesmas características e especificações do Arduino Uno, porém o seu grande diferencial é o seu tamanho e a quantidade de portas disponíveis. 
            O Arduino Mega é uma placa baseada em torno do microcontrolador ATmega2560. Ele possui 54 pinos digitais de entrada e saída (dos quais 15 podem ser usados como saídas PWM), 16 entradas analógicas e 4 UARTs (portas seriais de hardware).

O Mega é a placa perfeita para quem procura fazer projetos mais elaborados, que necessitam de um número maior de entradas e saídas. </p>
        </div>

        <div className="modelos" >
        <img src={nano} alt="nano" className="images"></img>
        <p>O Arduino Nano possui basicamente as mesmas características e especificações do Arduino Uno, porém o seu grande diferencial é sua compactabilidade. O Arduino Nano é uma placa baseada em torno do microcontrolador ATmega328.
             Ele possui 14 pinos digitais de entrada e saída (dos quais 6 podem ser usados como saídas PWM) e 8 entradas analógicas. Suas dimensões são 45 x 18 mm. Ele pode ser acoplado diretamente em uma protoboard e sua conexão é feita através de um mini cabo USB.

Seu pequeno porte pode ser extremamente útil em determinados projetos que necessitam de pouco espaço para operar. </p>
        </div>

        <div className="modelos" >
        <img src={pro} alt="pro" className="images"></img>
        <p>O Arduino Pro Micro, assim como o Nano, também possui compactabilidade como uma de suas vantagens. 
            O Arduino Pro Micro é uma placa baseada em torno do microcontrolador ATmega32U4. Ele possui 12 pinos digitais de entrada e saída (dos quais 5 podem ser usados como saídas PWM) e 9 entradas analógicas. Suas dimensões são 33 x 18 mm. Ele pode ser acoplado diretamente em uma protoboard ou até mesmo soldado em qualquer outro tipo de suporte que o maker tiver, e sua conexão é feita através de um micro cabo USB.

Uma outra características super útil desta placa é sua capacidade de emular dispositivos USB como mouses, 
teclados e outros periféricos em seu computador.</p>
        </div>

        <div className="modelos" >
        <img src={promini} alt="promini" className="images"></img>
        <p>O Arduino Pro Mini, assim como o Nano e o Pro Micro, também possui compactabilidade como uma 
            de suas vantagens. O Arduino Pro Mini é uma placa baseada em torno do microcontrolador 
            ATmega328p, assim como o Uno. Ele possui 14 pinos digitais de entrada e saída (dos quais 6 podem ser usados como saídas PWM) 
            e 8 entradas analógicas. Suas dimensões são 33 x 18 mm. Ele pode ser acoplado diretamente em uma protoboard ou até mesmo soldado 
            em qualquer outro tipo de suporte que o maker tiver. Um ponto negativo do Arduino Pro Mini é que ele não possui conexão USB embutida,
             portanto, para fazer a comunicação, será necessário um módulo conversor USB.

Basicamente, o Arduino Pro Mini é uma versão compacta e mais barata do Arduino Uno</p>
        </div>

        

</div>)}
}

return (
    <Main >
    <div className="container-fluid menu-btn">

    <button onClick={()=> {setModels(true)
    setPinagens(false)
    setInstalacao(false)
    }}>Modelos</button>

    <button onClick={()=> {setModels(false)
    setPinagens(true)
    setInstalacao(false)
    }}>Pinagens </button>

    <button onClick={()=> {setModels(false)
    setPinagens(false)
    setInstalacao(true)
    }}>Instalação</button>

    <button>Vídeos</button>
    
    
    </div>    
        {renderModelos()}
        {renderPinagens()}    
        {renderInstalacao()} 
        
                   
    </Main>
)

}