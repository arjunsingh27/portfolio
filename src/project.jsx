import React from "react";
import ReactDOM from "react-dom";
import Header from "/Users/arjunsingh/Downloads/Btech/V_Sem/Projects/arjuns/src/components/header.js";
import "./project.css";
import ProjectCard from "./projectcard.jsx";
import projectsdetail from "./projectsdetail.js";
import ProjectCardDetails from "./allprojectcard.jsx";
import Allprojectcard from "./allprojectcard.jsx";

function Project() {
  const topthree = 3;
  const newprojectsdetail = projectsdetail.slice(0, topthree);
  return (
    <div className="project_page">

 {/* .......................................................................... */}

      <h3>Top 3 Projects</h3>
      <div className="project_container_top3">
        {newprojectsdetail.map((project) => {
          return (
            <div className="project_row">
              <ProjectCard
                key={project.id}
                id={project.id}
                projecttitle={project.projecttitle}
                detail={project.projectdescription}
                image={project.projectimage}
              />
            </div>
          );
        })}
      </div>
 {/* .......................................................................... */}
 <h3>All Projects</h3>
  <div className="project_container_all_page">
  
 <div className="item">
  {projectsdetail.map((project) => {
            return (
              
              
                    <Allprojectcard
                      key={project.id}
                      id={project.id}
                      projecttitle={project.projecttitle}
                      detail={project.projectdescription}
                      image={project.projectimage}
                    />
             
                 
           
            );

          })}
          </div>
  </div>
  {/* .......................................................................... */}
 </div>
  );
}
export default Project;
