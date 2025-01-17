"use client"
import React from 'react'
import Image from 'next/image'
import aboutPhoto from '../assets/about-us.jpg'
import "aos/dist/aos.css";
import { useEffect } from "react";
import babyshower1 from '../assets/baby-shower.jpg'
import babyshower2 from '../assets/baby-shower-favor.jpg'
import babyshower3 from '../assets/baby-shower-balloons.jpg'
import Quote from '../quote/page';
import AOS from "aos";

const BabyShower = () => {
  useEffect(() => {
      AOS.init({ duration: 800, offset: 100 });
    }, []);

  return (
    <div className="page">
      <h1 className="service-title">Baby Shower</h1>
      <div className="gallery-row" data-aos="fade-up">

        
      <Image className="gallery-photo" alt= "" src={babyshower1} />
        <Image className="gallery-photo" alt= "" src={babyshower2} />
        <Image className="gallery-photo" alt= "" src={babyshower3} />


      </div>

      <Quote />
      </div>


  )
}

export default BabyShower