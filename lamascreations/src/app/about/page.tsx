"use client"
import React from 'react'
import Image from 'next/image'
import aboutPhoto from '../assets/about-us.jpg'
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";

const About = () => {
  useEffect(() => {
      AOS.init({ duration: 800, offset: 100 });
    }, []);

  return (
    <div className="page">
      <h1 className="service-title">About Us</h1>
      <p className="about-text" data-aos="fade-up"> Let us know every wish for your big day. Services include: 
        Entrance poster or mirror, Flower bouquet, Customizable ring tray, Table centerpieces, Couple seating, Venue decor, wedding favours and/or chocolate arrangement Let us know every wish for your big day. Services include: 
        Entrance poster or mirror, Flower bouquet, Customizable ring tray, Table centerpieces, Couple seating, Venue decor, wedding favours and/or chocolate arrangement

        Let us know every wish for your big day. Services include: 
        Entrance poster or mirror, Flower bouquet, Customizable ring tray, Table centerpieces, Couple seating, Venue decor, wedding favours and/or chocolate arrangement</p>

      <Image className="about-image" data-aos="fade-up" alt="" src={aboutPhoto} />
</div>


  )
}

export default About