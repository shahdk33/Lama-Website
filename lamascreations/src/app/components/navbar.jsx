import Image from 'next/image'
import React from 'react'
import logo from '../assets/Logo.png'
import '../globals.css';

const Navbar = () => {
  return (
    <div>


        <nav className='topNav'>
            
            <a href="#top">
                <Image src={logo}  alt="Lama's Creations Logo" className='logo'/>
            </a>

            <ul className="topNavLinks">
                <li> <a href="#top" >Home</a></li>
                <li> <a href="#events">Events</a></li>
                <li> <a href="#rentals">Rentals</a></li>
                <li> <a href="#about">About</a></li>
            </ul>

            <div>
            <a href="#quote" className='quote-button'>Get A Quote</a>

            </div>
            
        </nav>

    </div>
  )
}

export default Navbar