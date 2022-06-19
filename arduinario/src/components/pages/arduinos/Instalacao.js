import React from "react";
import "./Instalacao.css"
import driver from "../../../assets/img/instalacao/instaldriver.png"
import porta from  "../../../assets/img/instalacao/configPorta.png"
import teste from  "../../../assets/img/instalacao/primeiroTeste.png"

export default propos =>{
    return(
        <div className="instalacao container-fluid">
            <h3 className="mt-5">Instalação da IDE arduíno passo a passo Windows</h3>
           
            <ol>
<li>Navegue para esse endereço <a href="https://www.arduino.cc/en/software" target="_blank">clica aqui.</a></li>
<li>Escolha  versão correta para seu SO em dowloads.</li>
<li>Após o download, clique no arquivo e manda instalar.</li>
<li>Será criado um atalho na sua área de trabalho.</li>
<li>Agora é só executar e sua ide está quase pronta para funcionar.</li>

            </ol>
           
            <h4>Configuração</h4>
            
            <p>Agora chegou a hora de instalarmos o seu arduíno, leve em conta que estou  </p>
            <p> usando o SO windows 10, mas deixarei abaixo dicas </p>
            <p>para instalar em versões do windos anteriores.
            </p>
            <p>Conecte seu arduino em uma porta usb e espere alguns segundos, em seguida verifique </p>
            <p>em seu gerenciador
                de dispositivos se apareceu como na imagem.
            </p>
            <img src={driver}></img>

            <p>Se ocorreu tudo certo até aqui, entre no seu programa do arduíno e verifique se a porta bate 
                com a que apareceu no seu gerenciador de dispositivos, e sete a porta correta, como na imagem abaixo
            </p>
            <img src={porta}></img>
            <p>Se ocorreu tudo certo até aqui, é hora de testarmos o arduíno. Abra o programa, vá em arquivo, </p>
            <p>exemplo, basics e selecione Blink.</p>
            <img src={teste}></img>
        <p>Agora aperte no ícone com uma seta a direita no canto superior esquerdo ou simplesmente </p>
        <p>aperte Ctrl+U para</p>
        <p>carregar esse sketch no seu arduíno e aguarde um pouco</p>
        <p>Se tudo deu certo, o led do seu arduíno ficará piscando, pois você acaba de carregar instruções para isso.</p>
        
        <h4>Caso queira instalar no SO windows7, siga os passos listados nesse pequeno tutorial e provavelmente vai da certo <a href="https://protovie.com/2019/03/13/como-instalar-o-arduino-no-windows-7/" target="_blank"> clika aqui</a> </h4>
        
        </div>

        
    )
}