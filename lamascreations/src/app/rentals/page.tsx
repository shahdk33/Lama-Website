"use client"
import React from 'react'
import Image from 'next/image'
import couchPhoto from '../assets/Couch.png'
import bench from '../assets/cream-bench.jpg'
import arch from '../assets/gold-arch.png'
import arches from '../assets/gold-arches.jpg'
import centerpeices from '../assets/centerpeices.png'
import centerpeices2 from '../assets/centerpeices2.png'

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
          <Image className='eventPhoto' alt="cream love seat couch" src={couchPhoto}/>
          <p>Cream Love Seat Couch</p>
          <button className="arrowButton">
            &rarr;
          </button>
        </div>

        <div className='eventPhotoDiv' data-aos="fade-up">
          <Image className='eventPhoto' alt="cream love seat bench" src={bench}/>
          <p>Cream Love Seat Bench</p>
          <button className="arrowButton">
            &rarr;
          </button>
        </div>

        <div className='eventPhotoDiv' data-aos="fade-up">
          <Image className='eventPhoto' alt="party photo" src={arch}/>
          <p>Gold Circle Arch</p>
          <button className="arrowButton">
            &rarr;
          </button>
        </div>

      </div>

            <div className="rentals-Div">

        <div className='eventPhotoDiv' data-aos="fade-up">
          <Image className='eventPhoto' alt="gold arches" src={arches}/>
          <p>Gold Arches</p>
          <button className="arrowButton">
            &rarr;
          </button>
        </div>

        <div className='eventPhotoDiv' data-aos="fade-up">
          <Image className='eventPhoto' alt="gold centerpieces" src={centerpeices}/>
          <p>Set of Gold Table Centerpieces</p>
          <button className="arrowButton">
            &rarr;
          </button>
        </div>

        <div className='eventPhotoDiv' data-aos="fade-up">
          <Image className='eventPhoto' alt="party photo" src={centerpeices2}/>
          <p>Set of Gold Table Centerpieces</p>
          <button className="arrowButton">
            &rarr;
          </button>
        </div>

      </div>

    </div>


  )
}

export default Rentals