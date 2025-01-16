import React from 'react'

const Footer = () => {
    return (
        <footer className="footer">
          <div className="footer-Div">
            <p className="footer-date">© {new Date().getFullYear()} Lamas Creations. All rights reserved.</p>
            <div className="footer-links">
              <a href="">Contact Us</a> | 
              <a href="">Instagram</a> | 
              <a href="">Facebook</a>

            </div>
          </div>
        </footer>
    )
}

export default Footer