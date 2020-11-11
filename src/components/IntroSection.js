import React from 'react';
import './IntroSection.css';

function IntroSection() {
  return (<div className='intro-section'>
    <div className='image'></div>
    <div className='text-section'>
      <p>
        Hi, my name is Elias... I am an iOS Developer, computer science graduate, and Udacity iOS nanodegree graduate. The images below show my projects. ServingsUp and BinDecHex are currently available for free in the Apple App Store. For usage screenshots and code, tap on the image, or GitHub link in the header. A little bit more about me… I enjoy designing UI, and Sketch is my tool of choice. I think UX is very important as well and try to think about my apps as a new user, not just the developer. To keep up with me, my twitter profile is linked in the header. Thanks.
      </p>
    </div>

    <div className='contact-section'>
      <p>eliasdeveloper1@gmail.com</p>
    </div>
  </div>);
}

export default IntroSection;
