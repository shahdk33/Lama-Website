"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import logo from '../assets/Logo.png'
import '../globals.css';
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <div>
      <nav className='topNav'>
        <a href="/home">
          <Image src={logo} alt="Lama's Creations Logo" className='logo'/>
        </a>

        <button 
          className="mobile-menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>

        <div className={`topNavDiv ${isMenuOpen ? 'mobile-menu-open' : ''}`}>
          <ul className="topNavLinks">
            <li 
              className="servicesDropdown" 
              onClick={() => setIsServicesOpen(!isServicesOpen)}
            >
              <a href="/home#events">SERVICES</a>
              <ul className={`dropdownMenu ${isServicesOpen ? 'mobile-menu-open' : ''}`}>
                <li><Link href="/weddings" onClick={() => setIsMenuOpen(false)}>WEDDING</Link></li>
                <li><Link href="/babyShower" onClick={() => setIsMenuOpen(false)}>BABY SHOWER</Link></li>
                <li><Link href="/otherEvents" onClick={() => setIsMenuOpen(false)}>OTHER EVENTS</Link></li>
                <li><Link href="/paintings" onClick={() => setIsMenuOpen(false)}>PAINTINGS</Link></li>
              </ul>
            </li>
            <li><Link href="/rentals" onClick={() => setIsMenuOpen(false)}>RENTALS</Link></li>
            <li><Link href="/gallery" onClick={() => setIsMenuOpen(false)}>GALLERY</Link></li>
            <li><Link href="/about" onClick={() => setIsMenuOpen(false)}>ABOUT</Link></li>

            <div className="quote-button-container">
            <Link className="quote-button" href="/quote" onClick={() => setIsMenuOpen(false)}>CONTACT</Link>
          </div>
          </ul>


        </div>
      </nav>
    </div>
  )
}

export default Navbar;