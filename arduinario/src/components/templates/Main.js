import './Main.css'
import React from 'react'
//import Header from './Header'

export default props =>
<React.Fragment>

<main className="conteudo container-fluid main">
   <div  className='p-3 mt-3'>
       {props.children}
   </div>
</main>
</React.Fragment>