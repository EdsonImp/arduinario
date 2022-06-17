import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Arduino from '../components/pages/arduinos/Arduino'

import Home from '../components/home/Home'



export default props =>(
    
<Routes>
    <Route exact path="/"  element = { <Home/> } />
    <Route exact path="/modelos" element={<Arduino/>}/>
    <Route path="*" element = {<Home/>} />
   
</Routes>
)