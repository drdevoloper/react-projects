import React from 'react'
import {FaCartPlus} from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Header = (props) => {
    return(   
        <div className='full'> 
        <div className='nav'>
        <div className='navbar'>
            <div className='dis'>
            <img src='navlogo2.jpg' alt='' className='img'/>
            <h1>PLAY MART</h1>
            </div>
            <ul className='ulist'>
          <li className='list'> <Link to = "/home">  HOME </Link> </li>
          <li className='list'> <Link to = "/indoor"> INDOOR GAMES </Link> </li>
          <li className='list'> <Link to = "/outdoor"> OUTDOOR GAMES </Link> </li>
          <li className='list'> <Link to = "/about"> ABOUT US</Link> </li>
          <li className='list'> <Link to = "/cart"> CART  <FaCartPlus/> </Link> </li>
            <button className='button'>login/register</button>
            </ul>
        </div>
        </div>
        </div>
        
        
    )
}

export default Header;