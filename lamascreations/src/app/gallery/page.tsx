"use client"
import React from 'react'
import Image from 'next/image'
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";
import weddingImage from '../assets/wedding-set-up.jpg'
import weddingImage2 from '../assets/wedding-enterance.jpg'
import weddingImage3 from '../assets/wedding-set-up-3.jpg'
import weddingImage4 from '../assets/wedding-table.jpg'
import weddingImage5 from '../assets/wedding-couch.jpg'
import weddingImage6 from '../assets/wedding-cake.jpg'
import grad from '../assets/grad-party.jpg'
import grad2 from '../assets/grad.jpg'
import flower from '../assets/flower-arc.jpg'
import bouqet from '../assets/bouqet-2.jpg'
import bouqet2 from '../assets/bouqet.jpg'
import babyshower1 from '../assets/baby-shower.jpg'
import babyshower2 from '../assets/baby-shower-favor.jpg'
import babyshower3 from '../assets/baby-shower-balloons.jpg'
import babyshower4 from '../assets/baby-chocolates.jpg'









const Gallery = () => {
  useEffect(() => {
      AOS.init({ duration: 800, offset: 100 });
    }, []);

  return (
    <div className="page">
      <h1 className="service-title">Gallery</h1>
      <div className="gallery-row">

        <Image className="gallery-photo" alt= "" src={weddingImage} />
        <Image className="gallery-photo" alt= "" src={weddingImage2} />
        <Image className="gallery-photo"  alt= "" src={weddingImage3} />
        <Image className="gallery-photo" alt= "" src={flower} />


      </div>

      <div className="gallery-row">
        
        <Image className="gallery-photo" alt= "" src={grad} />
        <Image className="gallery-photo" alt= "" src={grad2} />
        <Image className="gallery-photo" alt= "" src={weddingImage4} />

      </div>

      
      <div className="gallery-row">
        
        <Image className="gallery-photo" alt= "" src={weddingImage5} />
        <Image className="gallery-photo" alt= "" src={weddingImage6} />
        <Image className="gallery-photo" alt= "" src={bouqet} />
        <Image  className="gallery-photo" alt= "" src={bouqet2} />

      </div>

      <div className="gallery-row">
        
        <Image className="gallery-photo" alt= "" src={babyshower1} />
        <Image className="gallery-photo" alt= "" src={babyshower2} />
        <Image className="gallery-photo" alt= "" src={babyshower3} />
        <Image className="gallery-photo" alt= "" src={babyshower4} />

      </div>
     
</div>


  )
}

export default Gallery