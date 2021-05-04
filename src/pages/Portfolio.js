import React, { Component } from "react";
import Project from "../components/Project/Project";
import projects from "../components/Project/projects.json";


class Portfolio extends Component {
    state = {
      projects
    };
  
    render() {
      return (
     <div>
          {this.state.projects.map(project => (
            <div>
            <br></br>
            <Project
            id={project.id}
            key={project.id}
            title={project.title}
            description={project.description}
            tech={project.tech}
            deployedlink={project.deployedlink}
            githublink={project.githublink}
            image1={project.image1}
            image2={project.image2}
            alt1={project.alt1}
            alt2={project.alt2}
            />
            <br></br>
            </div>
          ))}
     </div>
      );
    }
  }
  
  export default Portfolio;
  

