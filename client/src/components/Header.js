import React from 'react';

import './Header.scss';

const Header = () => {
  return (
    <div className='Header'>
      <div className='Column-1 Header__column-1'>
        <span>CZ</span>
      </div>
      <div className='Column-2 Header__column-2'>
        <a href='https://twitter.com/devme11' rel='noreferrer' target='_blank'>
          <i className='fab fa-twitter'></i>
        </a>
        <a
          href='https://www.linkedin.com/in/ji%C5%99%C3%AD-ne%C4%8Des%C3%A1nek/?locale=en_US'
          rel='noreferrer'
          target='_blank'
        >
          <i className='fab fa-linkedin-in'></i>
        </a>
        <a href='https://github.com/djneces' rel='noreferrer' target='_blank'>
          <i className='fab fa-github'></i>
        </a>
      </div>
      <nav className='Column-3 Header__column-3'>
        <a href='#about'>
          <li>About</li>
        </a>
        <a href='#projects'>
          <li>Projects</li>
        </a>
        <a href='#design-link'>
          <li>Design</li>
        </a>
      </nav>
    </div>
  );
};

export default Header;
