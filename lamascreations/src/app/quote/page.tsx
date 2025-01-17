"use client"
import React from 'react'
import Image from 'next/image'
import couchPhoto from '../assets/Couch.png'
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";

const Quote = () => {
  useEffect(() => {
      AOS.init({ duration: 800, offset: 100 });
    }, []);

  return (
    <div className="rentals-page">
      <h1 className="service-title">Inquiry or Quote</h1>
      <div className="contact-us">
     
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            className="form-input"
            placeholder="Enter your full name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-input"
            placeholder="Enter your email address"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="serviceType">Service Type</label>
          <select
            id="serviceType"
            name="serviceType"
            className="form-select"
            required
          >
            <option value="" >
              Select a service type
            </option>
            <option value="wedding">Wedding Planning</option>
            <option value="event">Baby Shower</option>
            <option value="event">Other Event</option>
            <option value="rentals">Rentals</option>
          </select>
        </div>

        {/* Message */}
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            className="form-textarea"
            placeholder="Write your message here"
            rows="6"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="form-group">
        <button className="arrowButton">
            &rarr;
        </button>
        </div>
      </form>
    </div>
</div>


  )
}

export default Quote