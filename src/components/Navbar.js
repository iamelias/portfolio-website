import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <nav className = 'navbar'>
        <div className='navbar-container'>
          <Link to="/" className="navbar-logo">
            iamElias <i className='fas fa-atom' />
          </Link>
        <div className = 'menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          //<i class="fas fa-bars"></i>
          //<i class="fas fa-atom"></i>
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/Home' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/Resume' className='nav-links' onClick={closeMobileMenu}>
              Resume
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/Contact' className='nav-links' onClick={closeMobileMenu}>
              Contact
            </Link>
          </li>
      </ul>
      </div>
    </nav>
  </>
  );
}

export default Navbar
