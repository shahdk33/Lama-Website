"use client"
import React from 'react'
import Image from 'next/image'
import aboutPhoto from '../assets/about-us.jpg'
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";

const Other = () => {
  useEffect(() => {
      AOS.init({ duration: 800, offset: 100 });
    }, []);

  return (
    <div className="page">
      <h1 className="service-title">Other Events</h1>
      </div>


  )
}

export default Other