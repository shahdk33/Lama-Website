"use client"
import React from 'react'
import Image from 'next/image'
import aboutPhoto from '../assets/about-us.jpg'
import "aos/dist/aos.css";
import { useEffect } from "react";
import grad from '../assets/grad-party.jpg'
import grad2 from '../assets/grad.jpg'
import bouqet from '../assets/bouqet.jpg'

import Quote from '../quote/page';
import AOS from "aos";

const Other = () => {
  useEffect(() => {
      AOS.init({ duration: 800, offset: 100 });
    }, []);

  return (
    <div className="page">
      <h1 className="service-title">Other Events</h1>
      <div className="gallery-row" data-aos="fade-up">

        
      <Image className="gallery-photo" alt= "" src={grad} />
      <Image className="gallery-photo" alt= "" src={bouqet} />
        <Image className="gallery-photo" alt= "" src={grad2} />


      </div>

      <Quote />
      </div>


  )
}

export default Other