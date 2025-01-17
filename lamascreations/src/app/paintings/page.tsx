"use client"
import React from 'react'
import Image from 'next/image'
import aboutPhoto from '../assets/about-us.jpg'
import "aos/dist/aos.css";
import { useEffect } from "react";
import weddingImage2 from '../assets/wedding-enterance.jpg'
import weddingImage3 from '../assets/wedding-set-up-3.jpg'
import weddingImage4 from '../assets/wedding-table.jpg'
import weddingImage5 from '../assets/wedding-couch.jpg'
import weddingImage6 from '../assets/wedding-cake.jpg'
import Quote from '../quote/page';
import AOS from "aos";

const Painting = () => {
  useEffect(() => {
      AOS.init({ duration: 800, offset: 100 });
    }, []);

  return (
    <div className="page">
      <h1 className="service-title">Paintings</h1>
      <div className="gallery-row" data-aos="fade-up">

        
<Image className="gallery-photo" alt= "" src={weddingImage2} />
<Image className="gallery-photo" alt= "" src={weddingImage4} />
<Image className="gallery-photo" alt= "" src={weddingImage6} />


</div>

<Quote />
      </div>


  )
}

export default Painting