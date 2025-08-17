import React from 'react';
import ProjectBox from './ProjectBox';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectName="StockPortfolio" />
        <ProjectBox projectName="EmailSubscription" />
        <ProjectBox projectName="ChatApp" />
      </div>
    </div>
  );
};

export default Projects;
