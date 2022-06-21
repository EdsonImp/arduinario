import React from "react"
import cncshield from "../../../assets/img/shields/CncShield.jpg"
import ethernet from "../../../assets/img/shields/EthernetShield.png"
import joystik from "../../../assets/img/shields/joystik.jpg"
import multifuncional from "../../../assets/img/shields/multifuncional.jpg"
import display from "../../../assets/img/shields/display.jpg"


export default props =>{
    return(
        
        <><div><h4 className="mt-4">Abaixo alguns dos modelos de Shilds mais usados.</h4>
            <hr />
            <h5>CNC Shield</h5>
            <img src={cncshield} alt="cncshield" className="images" width={400}></img>
            <p> CNC Shield é uma placa que foi desenvolvida para facilitar a vida de quem necessita controlar até 4 motores simultâneos,
            proporcionando mais organização e desenvoltura em projetos com motores. A principal função dessa shield é fazer o controle de máquinas CNC’s e
            tem suporte para diversos drivers, tais como A4988 e DRV8825, entre outros.</p>
            <hr/>
            <h5>Ethernet Shield W5100</h5>
            <img src={ethernet} alt="ethernet" className="images"></img>
            <p>O Ethernet Shield W5100 é uma forma rápida e prática de tornar sua placa Arduino on-line. 
É baseada no chip WIZnet ethernet W5100, que fornece acesso à rede nos protocolos TCP ou UDP. 
Duas bibliotecas nativas são usadas para poder usar o módulo facilmente: Ethernet Library e SD Library. 
Usar o Ethernet Shield é uma forma simples de disponibilizar online dados referentes a sensores ou sistemas 
que você controle usando um Arduino. A biblioteca Ethernet da IDE oferece todos os recursos necessários para 
que dados lidos com o Arduino possam ser acessados online.</p>
<hr/>
<h5>Joystik Shield</h5>
<img src={joystik} alt="joystick" className="images" width={400}></img>
<p>Este shield inclui um joystick analógico de dois eixos além de 6 botões digitais.
Neste shield também estão disponíveis conectores para módulos de comunicação sem fio (nRF24L01 e Bluetooth) e display Nokia 5110 LCD
(módulos de comunicação sem fio e display não inclusos).
Além de poder ultilizar em pequenos jogos criados no seu arduíno, ainda pode controlar vários outros projetos remotamente.</p>
<hr/>
<h5>Display Shield</h5>
<img src={display} alt="display" className="images" width={400}></img> 
<p>O Shield Display 16×02 LCD Keypad com Teclado dispõe de um display 16 x 2 (16 colunas x 2 linhas), 
sendo capaz de exibir até 16 caracteres. 
Além disso,possui um teclado com 6 botões do tipo push-button, que podem nos mais diversos projetos.

A principal vantagem do uso do Shield Display 16×02 LCD Keypad com Teclado é que ele pode ser conectado diretamente 
no Arduino.

O teclado do Shield Display 16×02 LCD Keypad com Teclado é composto por 6 botões de comando – SELECT, LEFT, UP, DOWN e RIGHT,
 e um botão RESET.</p>
 <hr/>

 <h5>Multifuncional Shield</h5>
 <img src={multifuncional} alt="multifuncional" className="images" width={400}></img>
       <p>O Shield Multi-funções ou shield para estudos tem um display de 7 segmentoscom 4 dígitos.
Tem circuito com  4 leds, 4 botões, um Buzzer, um potenciômetro, 4 headers para controle PWM, 
e mais outros dois conjuntos de soquetes – um para sensores de temperatura e outro para APC220.
Indispensável par aum bom começo e testes nos estudos com arduíno e robótica.</p>
<p>Link para baixar biblioteca zip </p>
<a href="https://blog.eletrogate.com/wp-content/uploads/2018/06/MultiFuncShield-Library-1_2.zip" target="_blank">Baixe aqui</a>
      <p>clique em Sketch, Incluir Biblioteca  e depois adicionar biblioteca.ZIP.

Depois da instalação, recarregue a Arduino IDE, senão a biblioteca não ficará ativa.

Uma outra Biblioteca que será também necessária é a TimerOne. Mas essa poderá instalar de outro modo. Clique em :

Sketch,Incluir Biblioteca , Gerenciar Bibliotecas 

Após abrir a janela do Gerenciador de Biblioteca, refine a busca digitando TimerOne. Na biblioteca  TimerOne, 
Clique em More Info e depois em Instalar. Após alguns segundos, ela será automaticamente instalada. Lembre-se que o 
seu computador precisa estar conectado na internet, para poder baixar a biblioteca. Após a instalação da Biblioteca,
 é necessário que feche e abra novamente o programa  Arduino IDE.</p>
        </div></>

)}