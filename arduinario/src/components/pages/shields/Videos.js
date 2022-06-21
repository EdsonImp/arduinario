import React from "react";
import "./Videos.css"

export default props =>{
    return(
        <div className="container-fluid ">
            <p>Instalação e configuração CNC Shield</p>
            <hr/>
          
            <iframe className="video" width="853" height="480" src="https://www.youtube.com/embed/S6OEGfAk78w" title="Testando CNC shield arduino" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>       
            <hr/>
            <p>Instalação e configuração Shield multifuncional</p>
            <iframe className="video" width="853" height="480" src="https://www.youtube.com/embed/aIxS_PC713c" title="Shield multifuncional arduino. Instalação e testes." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <hr/>
            <p>Instalação e Teste Shield LCD</p>
            <iframe className="video" width="853" height="480" src="https://www.youtube.com/embed/cX24QSu-eaM" title="Shield LCD arduino. Instalação e teste." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}


