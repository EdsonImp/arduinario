import React from "react";
import "./Videos.css"

export default props =>{
    return(
        <div className="container-fluid ">
            <label>Instalação e configuração</label>
            <hr/>
          
          <iframe className="video" width="853" height="480" src="https://www.youtube.com/embed/IlDqxdpYC3Y" title="Instalação e configuração arduíno uno" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
       
        </div>
    )
}

