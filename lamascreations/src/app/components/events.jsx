import React from 'react'
import Image from 'next/image'
import weddingPhoto from '../assets/wedding-couch.jpg'
import babyShowerPhoto from '../assets/baby-shower.jpg'
import partyPhoto from '../assets/grad.jpg'
import painting from  '../assets/painting.jpg'
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";

const Events = () => {
  useEffect(() => {
    AOS.init({ duration: 800, offset: 100 });
  }, []);

  return (
    <div className="events-page" id='events'>
      <h1 className="service-title">Services</h1>
      
      <div className="service" data-aos="fade-up">

        <div className='eventPhotoDiv'>
          <Image className='eventPhoto' alt="wedding photo" src={weddingPhoto}/>
        </div>

        <div className="eventDetails">
        <h2>Wedding Planning</h2>
        <p> Let us know every wish for your big day. Services include: 
            Entrance poster or mirror, Flower bouquet, Customizable ring tray, Table centerpieces, Couple seating, Venue decor, wedding favours and/or chocolate arrangement
        </p>
        <button className="arrowButton">
            &rarr;
        </button>
        </div>

      </div>

      <div className="service" data-aos="fade-up">

      <div className='eventPhotoDiv'>
        <Image className='eventPhoto' alt="baby shower photo" src={babyShowerPhoto}/>
      </div>

      <div className="eventDetails">
        <h2>Baby Shower</h2>
        <p> Let us know every wish for your big day. Services include: 
            Entrance poster or mirror, Flower bouquet, Customizable ring tray, Table centerpieces, Couple seating, Venue decor, wedding favours and/or chocolate arrangement
        </p>        
        <button className="arrowButton">
            &rarr;
        </button>
      </div>

      </div>

    <div className="service" data-aos="fade-up">

      <div className='eventPhotoDiv'>
        <Image className='eventPhoto' alt="party photo" src={partyPhoto}/>
      </div>

      <div className="eventDetails">
      <h2>Event Planning</h2>
      <p> Let us know every wish for your big day. Services include: 
            Entrance poster or mirror, Flower bouquet, Customizable ring tray, Table centerpieces, Couple seating, Venue decor, wedding favours and/or chocolate arrangement
        </p>      
        <button className="arrowButton">
            &rarr;
        </button>
      
    </div>

</div>
<div className="service" data-aos="fade-up">

<div className='eventPhotoDiv'>
  <Image className='eventPhoto' alt="painting photo" src={painting}/>
</div>

<div className="eventDetails">
  <h2>Paintings</h2>
  <p> Let us know every wish for your big day. Services include: 
 Entrance poster or mirror, Flower bouquet, Customizable ring tray, Table centerpieces, Couple seating, Venue decor, wedding favours and/or chocolate arrangement
  </p>
  <button className="arrowButton">
   &rarr;
  </button>
</div>

</div>





    </div>
  )
}

export default Events