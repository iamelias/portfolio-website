import React from 'react';
import '../../App.css';
import IntroSection from '../IntroSection';

function Home() {
  return (<div className='background'>

    <div class='flex-container'>

      <div class='flex-child'>
        <IntroSection/>
      </div>
      <div class='flex-child'></div>
    </div>

  </div>);
}

export default Home;
