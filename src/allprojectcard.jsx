import React from 'react';
import './allprojectcard.css';

function allprojectcard({ id, projecttitle, detail, image }) {
  return (
    <div className="project_container_all">
      <div className="project_container_all_left">
      <h6>{id}</h6>
      <img src={image} alt={projecttitle} />
      </div>
      <div className="project_container_all_right">
        <h3>{projecttitle}</h3>
      
        <p>{detail}</p>
      </div>
    </div>
  );
}

export default allprojectcard;
