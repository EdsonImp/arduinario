
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Nav from '../components/templates/Nav'
import Routes from './Routes'
import Footer from '../components/templates/Footer'
import Header from "../components/templates/Header"

export default props =>
<BrowserRouter>
<div className="app">
    <Header/>
    <Nav />
    <Routes />
    <Footer />

</div>
</BrowserRouter>
