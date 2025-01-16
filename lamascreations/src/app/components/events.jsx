import React from 'react'
import Image from 'next/image'
import weddingPhoto from '../assets/wedding-photo.jpg'
import babyShowerPhoto from '../assets/baby-shower-photo.jpg'
import partyPhoto from '../assets/party.jpg'

const Events = () => {
  return (
    <div className="events-page" id='events'>
      <h1 className="service-title">Services</h1>
      
      <div className="service">

        <div className='eventPhotoDiv'>
          <Image className='eventPhoto' src={weddingPhoto}/>
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

      <div className="service">

      <div className='eventPhotoDiv'>
        <Image className='eventPhoto' src={babyShowerPhoto}/>
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

    <div className="service">

      <div className='eventPhotoDiv'>
        <Image className='eventPhoto' src={partyPhoto}/>
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



    </div>
  )
}

export default Events