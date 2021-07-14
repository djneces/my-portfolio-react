import React from 'react';

import './Footer.scss';

const Footer = () => {
  const getYear = () => {
    const date = new Date();
    return date.getUTCFullYear();
  };
  return <footer className='Footer'>Jiří Nečesánek &copy; {getYear()}</footer>;
};

export default Footer;
