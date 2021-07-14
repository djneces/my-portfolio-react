/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import Image from './UIElements/Image';
import profileImg from '../assets/images/profile-transparent.png';

import './Section1.scss';

const Section1 = () => {
  return (
    <section className='Section1'>
      <a className='anchor' id='about'></a>
      <div className='Column-1 Section1__column-1'>
        <span>Jiří Nečesánek</span>
      </div>
      <div className='Column-2 Section1__column-2'>
        <div className='Section1__column-2--introduction'>
          <div>
            <span>Full</span>
            <br></br>
            <span>Passionate web developer & designer</span>
            <br></br>
            <span>Stack</span>
          </div>
          <p>
            I'm a devoted self-taught full-stack web developer. As of now I've
            been intensively studying for a year full-time. I love what I do and
            my main goal is to constantly improve and widen my understanding to
            evolve into a skilled valuable web developer.
          </p>
        </div>
        <div className='Section1__column-2--skills'>
          <i className='fab fa-html5'></i>
          <i className='fab fa-css3-alt'></i>
          <i className='fab fa-sass'></i>
          <i className='fab fa-bootstrap'></i>
          <i className='fab fa-js-square'></i>
          <i className='fab fa-react'></i>
          <i className='devicon-express-original'></i>
          <i className='fab fa-node-js'></i>
          <i className='devicon-mongodb-plain-wordmark'></i>
          <i className='devicon-firebase-plain'></i>
        </div>
      </div>
      <div className='Column-3 Section1__column-3'>
        <Image image={profileImg} />
      </div>
    </section>
  );
};

export default Section1;
