import React from 'react';
import './IntroSection.css';

function IntroSection() {
  return (
    <>
    <div class='flex-container'>
    <div className='flex-child'>
      <div className='intro-section'>
        <div className='image'></div>
        <div className='text-section'>
          <h3>iOS Developer | Product Designer</h3>
          <p>
            Hi, my name is Elias H., This is my online portfolio. Feel free to check out my projects and social media links in the header. I enjoy designing and coding useful and inspiring apps for myself and others.
          </p>
        </div>
        <div className='contact-section'>
          <p> eliasdeveloper1@gmail.com</p>
        </div>
      </div>
    </div>
    <div className='flex-child'></div>
  </div>
</>);
}

export default IntroSection;
