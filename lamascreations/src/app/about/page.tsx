"use client"
import React from 'react'
import Image from 'next/image'
import aboutPhoto from '../assets/about-us.jpg'
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";
import { Parisienne } from 'next/font/google';

const ballet = Parisienne({
  subsets: ['latin'],
  weight: ['400'],
});

const About = () => {
  useEffect(() => {
      AOS.init({ duration: 800, offset: 100 });
    }, []);

  return (
    <div className="about-page">
   
   
   <h1 className={`${ballet.className} header-title`} data-aos="fade-up">My Story</h1>

      <p className="about-text" data-aos="fade-up"> 
      Hello and welcome! My name is Lama Issa, and I’m overjoyed to share my passion for art and creativity with you. 
      <br></br> My journey began during my time as a Master's student at Dalhousie University, where I started an at-home business crafting chocolate arrangements for all kinds of occasions.

My husband and I brought that dream to life by opening Choco Cafe, a delightful chocolate shop and café in Downtown Halifax. Balancing this business alongside being a parent of three and pursuing my studies was not easy, but it was a labor of love and a chapter I hold close to my heart. Although unexpected circumstances led to the café’s closure, the experience fueled my passion for bringing joy to others through art and creativity.

Now, nearly a decade later, I’m thrilled to still be doing what I love most! <br></br> <br></br>With over <b>15 years of experience in event planning</b>, I specialize in turning your event dreams into unforgettable realities. I love connecting with people, understanding their vision, and bringing it to life!

It brings me so much joy to create something beautiful, meaningful, and unique for every client. Thank you for allowing me to do what I love while helping make your special moments truly extraordinary.

<br></br> <br></br>Let’s create something wonderful together!
      </p>

      <Image className="about-image" data-aos="fade-up" alt="" src={aboutPhoto} />
</div>


  )
}

export default About