import React,{useState} from 'react'
import Modelos from './Modelos'
import './Shields.css'
import Sobre from "./Sobre.js"



export default props =>{
    const [sobre, setSobre] = useState(true)
    const[modelos,setModelos] = useState(false)

    function renderModelos(){
        if(modelos){ 
        return(
            <Modelos/>
        )
    }    }


    function renderSobre(){
        if(sobre){ 
        return(
            <Sobre/>
        )
    }    }
   
   
    return(
        <div className='container-fluid menu-btn'>
<button className='btn' onClick={()=> {setModelos(false)
    setSobre(true)
    }}>Sobre</button>

<button className='btn' onClick={()=> {setModelos(true)
    setSobre(false)
    }}>Modelos</button>
<button className='btn'>Vídeos</button>

{renderSobre()}
{renderModelos()}

        </div>
    )
}