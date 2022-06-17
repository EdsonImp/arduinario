import React from "react"
import unor3 from "../../../assets/img/pinagem/pinagemUno.png"
import mega from "../../../assets/img/pinagem/pinagemMega.jpg"
import nano from "../../../assets/img/pinagem/pinagemNano.jpg"
import lilypad from "../../../assets/img/pinagem/pinagemLilypad.png"
import mini from "../../../assets/img/pinagem/pinagemMini.png"


export default propos => {
    return (
<div>
    <label>Pinagem arduíno uno-R3</label>
<img src={unor3}  width="100%" height="100%" />
<label>Pinagem arduíno mega</label>
<img src={mega} width="100%" height="100%" />
<label>Pinagem arduíno nano</label>
<img src={nano} width="100%" height="100%" />
<label>Pinagem arduíno lilypad</label>
<img src={lilypad}  width="100%" height="100%" />
<label>Pinagem arduíno mini</label>
<img src={mini}  width="100%" height="100%" />
</div>

   ) 
}