// src/components/Navbar.js

import React from 'react';

import landing from '../assets/landing-image.jpg';
import landing_text from '../assets/landing_text.png';
import scroll_arrow from '../assets/scroll-arrow.png';



function HomePage() {
  return (
    < div className="Landing-page" >

      <img src={landing} alt="Landing" className="landing-image" />
      <img src={landing_text} alt="Landing-Text" className="landing-text-image" />
      {/* <img src={scroll_arrow} alt="Scroll-down-arrow" className='scroll-arrow'></img> */}

    </div >
  );
}

export default HomePage;