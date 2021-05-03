import React, { Component } from "react";
import Project from "../components/Project/Project";
import projects from "../components/Project/projects.json";


class Portfolio extends Component {
    // Setting this.state.friends to the friends json array
    state = {
      projects
    };
  
    // Map over this.state.friends and render a FriendCard component for each friend object
    render() {
      return (
     <div>
         <h1>Projects</h1>
          {this.state.projects.map(project => (
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
          ))}
     </div>
      );
    }
  }
  
  export default Portfolio;
  



// function Portfolio() {


//     return (

//         <div>
//             <h1>Portfolio</h1>
//             <Project />


//         </div>
//     );
// }


// export default Portfolio;