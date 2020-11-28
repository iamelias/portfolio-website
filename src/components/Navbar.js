import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [button, setButton] = useState(true);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener('resize', showButton);

  return (
    <>
    <nav className='navbar'>
    <div className='navbar-container'>
      <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
        iamElias
        <i className='fas fa-atom'/>
      </Link>
      <div className='nav-menu-icon' onClick={handleClick}>
        <i className={click
            ? 'fas fa-times'
            : 'fas fa-bars'}/>
      </div>
      <div className='navbar-pages'>
        <ul className={click
            ? 'nav-menu active'
            : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
              Projects
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/resume' className='nav-links' onClick={closeMobileMenu}>
              Resume
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/privacyPolicy' className='nav-links' onClick={closeMobileMenu}>
              Privacy Policy
            </Link>
          </li>
          <li>
            <div className='navbar-social-icons'>
              <ul className='social-menu'>
                <li className='social-item'>
                  <a href='https://github.com/iamelias' target='_blank' rel="noreferrer">
                    <i className='fab fa-github fa-1x'></i>
                  </a>
                </li>
                <li className='social-item'>
                  <a href='https://twitter.com/iameliasss' target='_blank' rel="noreferrer">
                    <i className='fab fa-twitter fa-1x'></i>
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</>);
}

export default Navbar;
