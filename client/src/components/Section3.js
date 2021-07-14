import React from 'react';

import Image from './UIElements/Image';
import Button from './UIElements/Button';
import portfolioImg from '../assets/images/magdus-portfolio.jpg';
import youtubeImg from '../assets/images/youtube.jpg';
import macosImg from '../assets/images/macos.jpg';
import { CSS_PROJECTS } from '../assets/projectFeed/projectFeed';

import './Section3.scss';

const Section3 = () => {
  const { lektor, youtube, macos } = CSS_PROJECTS;
  return (
    <section className='Section3'>
      <div className='Section3__content'>
        <div className='Column-1 Section3__content-column-1'>
          <span>HTML/CSS projects</span>
        </div>
        <div className='Section3__content-grid'>
          <div className='Section3__content-grid--project-1'>
            <Image image={portfolioImg} />
            <div>
              <div className='Section3__content-grid--container'>
                <h3>Personal Portfolio</h3>
                <h4>English teacher website</h4>
                <p>
                  Real website created from my XD proposal, built with
                  Bootstrap. Fully responsive.
                </p>
                <span>HTML5, CSS3, Bootstrap, Sass, PHP</span>
              </div>
              <div className='Section3__content-grid--links'>
                <Button href={lektor.url} target='_blank'>
                  <span>Live</span>
                  <i className='fas fa-chevron-right'></i>
                </Button>
                <Button inverse href={lektor.github} target='_blank'>
                  <span>Github</span>
                  <i className='fas fa-chevron-right'></i>
                </Button>
              </div>
            </div>
          </div>
          <div className='Section3__content-grid--project-2'>
            <Image image={youtubeImg} />
            <div>
              <div className='Section3__content-grid--container'>
                <h3>CSS Youtube Clone</h3>
                <h4>Clone build with CSS and HTML</h4>
                <p>Fully responsive website.</p>
                <span>HTML5, CSS3</span>
              </div>
              <div className='Section3__content-grid--links'>
                <Button href={youtube.url} target='_blank'>
                  <span>Live</span>
                  <i className='fas fa-chevron-right'></i>
                </Button>
                <Button inverse href={youtube.github} target='_blank'>
                  <span>Github</span>
                  <i className='fas fa-chevron-right'></i>
                </Button>
              </div>
            </div>
          </div>
          <div className='Section3__content-grid--project-3'>
            <Image image={macosImg} />
            <div>
              <div className='Section3__content-grid--container'>
                <h3>MacOs CSS Clone</h3>
                <h4>MacOs Catalina desktop screen</h4>
                <p>
                  Features: draggable, resizable, closing and opening window,
                  fake 'login' after logout.
                </p>
                <span>HTML5, CSS3, JQuery UI, JavaScript</span>
              </div>
              <div className='Section3__content-grid--links'>
                <Button href={macos.url} target='_blank'>
                  <span>Live</span>
                  <i className='fas fa-chevron-right'></i>
                </Button>
                <Button inverse href={macos.github} target='_blank'>
                  <span>Github</span>
                  <i className='fas fa-chevron-right'></i>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
