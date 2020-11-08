import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import IntroSection from '../IntroSection';


function Home() {
  return (
    <div className='background'>

      <div class='flex-container'>

        <div class='flex-child'>
          <IntroSection/>
        </div>

        <div class = 'flex-child'></div>
      </div>

    </div>
  );
}

export default Home;
