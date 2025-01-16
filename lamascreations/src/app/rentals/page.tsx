"use client"
import React from 'react'
import Image from 'next/image'
import couchPhoto from '../assets/Couch.png'
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";

const Rentals = () => {
  useEffect(() => {
      AOS.init({ duration: 800, offset: 100 });
    }, []);

  return (
    <div className="rentals-page">
      <h1 className="service-title">Rental Items</h1>

<div className="rentals-Div">

<div className='eventPhotoDiv' data-aos="fade-up">
          <Image className='eventPhoto' alt="wedding photo" src={couchPhoto}/>
          <button className="arrowButton">
            &rarr;
        </button>
</div>

      <div className='eventPhotoDiv' data-aos="fade-up">
        <Image className='eventPhoto' alt="baby shower photo" src={couchPhoto}/>
        <button className="arrowButton">
            &rarr;
        </button>
      </div>

      <div className='eventPhotoDiv' data-aos="fade-up">
        <Image className='eventPhoto' alt="party photo" src={couchPhoto}/>
        <button className="arrowButton">
            &rarr;
        </button>
      </div>
</div>
</div>


  )
}

export default Rentals