import React from 'react'
import header from '../assets/Header-Image.jpg'
import Image from 'next/image'
import { Roboto } from '@next/font/google';

// Define `roboto` if not imported from layout
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const Header = () => {
  return (
    <div>
        <Image className="header-image" alt="wedding table set up" src={header}/>
        <div className="header-text">
        <h1 className={roboto.className}>This heading uses Roboto</h1>
            <h1 className="header-title">What's the occasion?</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab quam voluptatibus deleniti cumque, delectus incidunt, error sapiente 
                temporibus aut numquam possimus tenetur natus beatae, modi doloribus consectetur recusandae suscipit. Quisquam!</p>
            
            </div>
    </div>
  )
}

export default Header