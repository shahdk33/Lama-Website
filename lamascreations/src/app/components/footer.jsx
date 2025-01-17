import React from 'react'

const Footer = () => {
    return (
        <footer className="footer">
          <div className="footer-Div">
            <p className="footer-date">© {new Date().getFullYear()} Lamas Creations. All rights reserved.</p>
            <div className="footer-links">
              <a href="/quote">Contact Us</a> | 
              <a href="https://www.instagram.com/lamascreations/" target='blank'>Instagram</a> | 
              <a href="https://www.facebook.com/p/Lama-Creations-100064520181464/" target='blank'>Facebook</a>

            </div>
          </div>
        </footer>
    )
}

export default Footer