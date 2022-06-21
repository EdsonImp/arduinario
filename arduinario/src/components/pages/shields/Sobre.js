import React from "react"
import shild from "../../../assets/img/shields/shilds.jpg"

export default props =>{
return(
    <div>
        <h3 className="mt-4">O que são os SHILDS para Arduíno?</h3>
        <hr/>
        <img src={shild}  width="40%" height="30%" />
        <p>
            <hr/>
        Os shields do Arduino são placas que irão expandir as funcionalidades do seu Arduino. 
        Você só precisa conectá-los por cima da placa Arduino. 
        Existem inúmeros tipos de shhields no mercado, para realizar inúmeras tarefas.
        </p>
        <p>Note que a grande maioria não atrapalha em nada o uso do seu arduíno para outros fins, pois
            elas contém em sua superfície saídas semelhantes as do seu arduíno, para que possa conectar 
            outros acessórios e usá-los em conjunto, ampliando sua funcionalidade e versatilidade.
        </p>
        <p>
            Você irá encontrar no mercado, inúmeros modelos, com preços e funcinalidades diversas, sendo os mais comuns e 
            fáceis de encontrar em bancadas por aí, os shilds CNC para proteção e controle de motores, muito usados em 
            CNC routers. Também bastante usado é o shield Ethernet, principalmente com a popularização da internet mundo afora. O protoshild
             também se popularizou entre os hobistas e tem muita procura no mercado de robótica.
        </p>
    </div>
)

}