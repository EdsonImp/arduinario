import React,{useState} from 'react'
import Modelos from './Modelos'
import './Shields.css'
import Sobre from "./Sobre.js"
import Videos from './Videos'



export default props =>{
    const [sobre, setSobre] = useState(true)
    const[modelos,setModelos] = useState(false)
    const [videos, setVideos] = useState(false)

    function renderVideos(){
        if(videos){ 
        return(
            <Videos/>
        )
    }    }
    
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
    setVideos(false)
    }}>Sobre</button>

<button className='btn' onClick={()=> {setModelos(true)
    setSobre(false)
    setVideos(false)
    }}>Modelos</button>
<button className='btn' onClick={()=> {setModelos(false)
    setSobre(false)
    setVideos(true)
    }}>Vídeos</button>

{renderSobre()}
{renderModelos()}
{renderVideos()}

        </div>
    )
}