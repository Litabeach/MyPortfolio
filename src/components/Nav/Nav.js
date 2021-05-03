import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav class="navbar navbar-dark navbar-expand-md justify-content-center">
    <a href="index.html" class="navbar-brand d-flex w-50 mr-auto">Lita Beach</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar3">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="navbar-collapse collapse w-100" id="collapsingNavbar3">
      <ul class="nav navbar-nav ml-auto w-100 justify-content-end">
        <li class="nav-item">
          <a class="nav-link" href="index.html">About <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="contact.html">Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="portfolio.html">Portfolio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="02-CSS-Bootstrap/Assets/LitaBeachResume.pdf">Resume</a>
        </li>
      </ul>
    </div>
  </nav>
  );
}

export default Nav;