import React from 'react';
import '../../App.css';
import PrivPolSection from '../PrivPolSection';

function PrivacyPolicy() {
  return (<div className='background'>

    <div class='flex-container'>

      <div class='flex-child'>
        <PrivPolSection/>
      </div>
      <div class='flex-child'></div>
    </div>
  </div>);
}

export default PrivacyPolicy;
