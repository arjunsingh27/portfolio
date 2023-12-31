import React from 'react';
import './projectcard.css';

function ProjectCard({ id, projecttitle,detail,image}) {
  return (

    <div className="Project">
      <div className="Project_title">
        <p>{projecttitle}</p>
       
      </div>
      <div>
      <img src={image} alt="Project_image" />
      {/* {console.log(image)} */}
    </div>
    </div>
  );
}

export default ProjectCard;
