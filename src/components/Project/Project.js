import React from "react";
import "./style.css";
// import images from "../../images"

function Project(props) {
  return (
    // <h1>projects div here</h1>
    <main className="container portContainer">
      <div className="row">
        <div className="col-lg-12  portfolio">
          <h3>{props.title}</h3>
          <h5>{props.description} </h5>
          <p> {props.tech}</p>
          <p><a href={props.deployedlink} className="links">Visit {props.title}</a> <br />
            <a href={props.githublink} className="links">Github Repo </a></p>
          <a href={props.githublink} className="hover-img">
            <img src= {props.image1} className="img-fluid port-image"
              alt={props.alt1} />
            <img src={props.image2} className="img-fluid port-image"
              alt={props.alt2} />
          </a>
        </div>
      </div>
    </main>

  );
}

export default Project;