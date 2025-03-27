import React from 'react'
import Image from 'next/image'
import { Parisienne } from 'next/font/google';
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";
import weddingImage from '../assets/wedding-set-up.jpg'
import weddingImage2 from '../assets/wedding-enterance.jpg'
import weddingImage3 from '../assets/wedding-set-up-3.jpg'
import weddingImage4 from '../assets/wedding-table.jpg'
import grad2 from '../assets/grad.jpg'


const ballet = Parisienne({
  subsets: ['latin'],
  weight: ['400'],
});

const Header = () => {
   useEffect(() => {
      AOS.init({ duration: 800, offset: 100 });
    }, []);
  return (
    <div className="headerDiv">
      <div className="gallery-row">
      <Image className="header-photo" alt= "" src={weddingImage3} />
      <Image className="header-photo" alt= "" src={grad2} />
      <Image className="header-photo" alt= "" src={weddingImage4} />

      </div>

        <div className="header-text">
          
            <h1 className={`${ballet.className} header-title`} data-aos="fade-up">What's the occasion?</h1>
            <p className="header-p" data-aos="fade-up"><b>Wedding, Baby Shower, Bridal Shower, Engagement Party, Award Ceremony or Graduation: Whatever it may be, Lama's Creations has got you covered!</b></p>
            
        </div>

    </div>
  )
}

export default Header