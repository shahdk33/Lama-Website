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
                <li className="servicesDropdown"> <a href="/home#events">Services</a>
                      <ul className="dropdownMenu">
                      <li><Link href="/weddings">Weddings</Link></li>
                      <li><Link href="/babyShower">Baby Showers</Link></li>
                      <li><Link href="/otherEvents">Other Events</Link></li>
                      <li><Link href="/paintings">Paintings</Link></li>
                      </ul>
                </li>
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