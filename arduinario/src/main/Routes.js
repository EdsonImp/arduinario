import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Arduino from '../components/pages/arduinos/Arduino'
import Shields from '../components/pages/shields/Shields'
import Home from '../components/home/Home'
import Sensores from '../components/pages/sensores/Sensores'


export default props =>(
    
<Routes>
    <Route exact path="/"  element = { <Home/> } />
    <Route exact path="/modelos" element={<Arduino/>}/>
    <Route exact path="/shields" element={<Shields/>}/>
    <Route exact path="/sensores" element={<Sensores/>}/>
    <Route path="*" element = {<Home/>} />

   
</Routes>
)