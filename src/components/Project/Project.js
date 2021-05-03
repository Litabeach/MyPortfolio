import React from "react";
import "./style.css";





function Project(props) {
    return (
      // <h1>projects div here</h1>
      <div>
        <h3>{props.title}</h3>
        <h5>{props.description} </h5>
        <p> {props.tech}</p>
      </div>
     
      // <main className="container">
      // <div className = "row">
      //   <div className="col-lg-12  portfolio">
      // <div>
      //     <h3>{projects.title}</h3>
      //     <h5>{projects.description} </h5>
      //     <p> {projects.tech}</p>
      //     <p><a href={projects.deployedlink} className="links">Visit {projects.title}</a> <br>
      //     <a href={projects.githublink} className="links">Github Repo </a></p>
      //     <a href={projects.githublink} className="hover-img"> 
      //       <img src={projects.image1} className="img-fluid port-image"
      //         alt={projects.alt1}> 
      //       <img src={projects.image2}
      //         alt={projects.alt2}>
      //     </a>
      //     </div>
      //   </div>
        /* </div>
      </div>
      <br>
      </main> */
     
    );
}

export default Project;