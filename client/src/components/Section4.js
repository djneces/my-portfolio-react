/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState, useEffect } from 'react';

import Carousel from './Carousel';
import Button from './UIElements/Button';
import { OTHER_PROJECTS } from '../assets/projectFeed/projectFeed';

import './Section4.scss';

const Section4 = () => {
  const [selectedProject, setSelectedProject] = useState('design');
  const [fetchedData, setFetchedData] = useState(
    OTHER_PROJECTS[selectedProject]
  );

  const handleProjectSelection = (e) => {
    // e.currentTarget.id so click on span is registered on the parent too
    setSelectedProject(e.currentTarget.id);

    // Add active class
    const divs = document.querySelectorAll('[name^="otherProject"]');
    divs.forEach((div) => {
      div.classList.remove('active');
    });
    document.querySelector(`#${e.currentTarget.id}`).classList.add('active');
  };

  useEffect(() => {
    setFetchedData(OTHER_PROJECTS[selectedProject]);
  }, [selectedProject]);

  return (
    <>
      <section className='Section4'>
        <a className='anchor' id='design-link'></a>
        <div className='Section4__heading'>
          <h1>Design</h1>
        </div>
        <div className='Section4__content'>
          <div className='Column-1 Section4__content-column-1'>
            <span>
              Graphic Design <span>& other</span>
            </span>
          </div>
          {/* Col 2 */}
          <div className='Column-2 Section4__content-column-2'>
            <div>
              <div
                className='Section4__content-column-2--design active'
                id='design'
                name='otherProject-design'
                onClick={(e) => handleProjectSelection(e)}
              >
                <span>Graphic Design</span>
                <i className='fas fa-chevron-right'></i>
              </div>
              <div
                className='Section4__content-column-2--art'
                id='art'
                name='otherProject-art'
                onClick={(e) => handleProjectSelection(e)}
              >
                <span>Digital Art</span>
                <i className='fas fa-chevron-right'></i>
              </div>
              <div
                className='Section4__content-column-2--travelSite'
                id='travelSite'
                name='otherProject-travelSite'
                onClick={(e) => handleProjectSelection(e)}
              >
                <span>Travel website</span>
                <i className='fas fa-chevron-right'></i>
              </div>
            </div>
            <div className='Section4__content-column-2--description'>
              {selectedProject && (
                <>
                  <h3>{fetchedData.title}</h3>
                  <h4>{fetchedData.subtitle}</h4>
                  <p>{fetchedData.description}</p>
                  {fetchedData.title === 'Travel site' && (
                    <Button href={fetchedData.url} target='_blank'>
                      <span>Live</span>
                      <i className='fas fa-chevron-right'></i>
                    </Button>
                  )}
                </>
              )}
            </div>
          </div>
          {/* Col 3 */}
          <div className='Column-3 Section4__content-column-3'>
            <Carousel data={fetchedData} />
          </div>
        </div>
      </section>
      <div className='Section4__responsiveCarousel'>
        {window.innerWidth < 720 && <Carousel data={fetchedData} />}
      </div>
    </>
  );
};

export default Section4;
