import Image from 'next/image'
import React from 'react'
import logo from '../assets/Logo.png'
import '../globals.css';
import Link from "next/link";

const Navbar = () => {
  return (
    <div>


        <nav className='topNav'>
            
            <a href="#top">
                <Image src={logo}  alt="Lama's Creations Logo" className='logo'/>
            </a>

<div className="topNavDiv">
            <ul className="topNavLinks">
                {/* <li> <Link href="/home">Home</Link></li> */}
                <li> <a href="/home#events">Services</a></li>
                <li> <Link href="/rentals">Rentals</Link></li>
                <li> <Link href="/gallery">Gallery</Link></li>
                <li><Link href="/about">About</Link></li>
            </ul>
</div>

            <div>
            <Link className="quote-button" href="/quote">Get A Quote</Link>

            </div>
            
        </nav>

    </div>
  )
}

export default Navbar