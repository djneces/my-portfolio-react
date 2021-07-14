/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';

import Carousel from './Carousel';
import Button from './UIElements/Button';
import { PROJECTS } from '../assets/projectFeed/projectFeed';

import './Section2.scss';

const Section2 = () => {
  const [selectedProject, setSelectedProject] = useState('cyclocamps');
  const [fetchedData, setFetchedData] = useState(PROJECTS[selectedProject]);

  const handleProjectSelection = (e) => {
    // e.currentTarget.id so click on span is registered on the parent too
    setSelectedProject(e.currentTarget.id);

    // Add active class
    const divs = document.querySelectorAll('[name^="project"]');
    divs.forEach((div) => {
      div.classList.remove('active');
    });
    document.querySelector(`#${e.currentTarget.id}`).classList.add('active');
  };

  useEffect(() => {
    setFetchedData(PROJECTS[selectedProject]);
  }, [selectedProject]);

  return (
    <>
      <section className='Section2'>
        <a className='anchor' id='projects'></a>
        <div className='Section2__heading'>
          <h1>Projects</h1>
        </div>
        <div className='Section2__content'>
          <div className='Column-1 Section2__content-column-1'>
            <span>React/Redux projects</span>
          </div>
          {/* Col 2 */}
          <div className='Column-2 Section2__content-column-2'>
            <div>
              <div
                className='Section2__content-column-2--project1 active'
                id='cyclocamps'
                name='project-cyclocamps'
                onClick={(e) => handleProjectSelection(e)}
              >
                <span>CycloCamps App</span>
                <i className='fas fa-chevron-right'></i>
              </div>
              <div
                className='Section2__content-column-2--project2'
                id='cinema'
                name='project-cinema'
                onClick={(e) => handleProjectSelection(e)}
              >
                <span>Cinema App</span>
                <i className='fas fa-chevron-right'></i>
              </div>
              <div
                className='Section2__content-column-2--project3'
                id='freshop'
                name='project-freshop'
                onClick={(e) => handleProjectSelection(e)}
              >
                <span> Freshop App</span>
                <i className='fas fa-chevron-right'></i>
              </div>
            </div>
            <div className='Section2__content-column-2--description'>
              {selectedProject && (
                <>
                  <h3>{fetchedData.title}</h3>
                  <h4>{fetchedData.subtitle}</h4>
                  <p>{fetchedData.description}</p>
                  <p>{fetchedData.features}</p>
                  <span>{fetchedData.technology}</span>
                </>
              )}
            </div>
          </div>
          {/* Col 3 */}
          <div className='Column-3 Section2__content-column-3'>
            <Carousel data={fetchedData} />
            <div className='Section2__content-column-3--links'>
              <Button href={fetchedData.url} target='_blank'>
                <span>Live</span>
                <i className='fas fa-chevron-right'></i>
              </Button>
              <Button inverse href={fetchedData.github} target='_blank'>
                <span>Github</span>
                <i className='fas fa-chevron-right'></i>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <div className='Section2__responsiveCarousel'>
        {window.innerWidth < 720 && <Carousel data={fetchedData} />}
      </div>
    </>
  );
};

export default Section2;
