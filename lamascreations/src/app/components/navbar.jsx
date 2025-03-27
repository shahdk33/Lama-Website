import Image from 'next/image'
import React from 'react'
import logo from '../assets/Logo.png'
import '../globals.css';
import Link from "next/link";

const Navbar = () => {
  return (
    <div>


        <nav className='topNav'>
            
            <a href="/home">
                <Image src={logo}  alt="Lama's Creations Logo" className='logo'/>
            </a>

<div className="topNavDiv">
            <ul className="topNavLinks">
                {/* <li> <Link href="/home">Home</Link></li> */}
                <li className="servicesDropdown"> <a href="/home#events">SERVICES</a>
                      <ul className="dropdownMenu">
                      <li><Link href="/weddings">WEDDING</Link></li>
                      <li><Link href="/babyShower">BABY SHOWER</Link></li>
                      <li><Link href="/otherEvents">OTHER EVENTS</Link></li>
                      <li><Link href="/paintings">PAINTINGS</Link></li>
                      </ul>
                </li>
                <li> <Link href="/rentals">RENTALS</Link></li>
                <li> <Link href="/gallery">GALLERY</Link></li>
                <li><Link href="/about">ABOUT</Link></li>
            </ul>
</div>

            <div>
            <Link className="quote-button" href="/quote">CONTACT</Link>

            </div>
            
        </nav>

    </div>
  )
}

export default Navbar