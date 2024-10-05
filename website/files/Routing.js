import React from 'react'
import { Routes , Route } from 'react-router-dom';
import Home from './home';
import Indoor from './indoor';
import Outdoor from './outdoor';
import About from './about';
import Cart from './cart';


const Routing = () => {
     return(
        <Routes>
            <Route path='/home' Component={Home}></Route>
            <Route path='/indoor' Component={Indoor}></Route>
            <Route path='/outdoor' Component={Outdoor}></Route>
            <Route path='/about' Component={About}></Route>
            <Route path='/cart' Component={Cart}></Route>
        </Routes>
     )


}

export default Routing;