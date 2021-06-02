import React from "react";
import Headshot from '../images/headshot.jpg';
import EmailIcon from '../images/email.jpg';
import PhoneIcon from '../images/phone.jpg';
import GithubIcon from '../images/githubicon.png';
import LinkedInIcon from '../images/linkedinicon.jpg';
import FBIcon from '../images/facebook.png';
import "./style.css";


function Home() {
  
      return (
        <main className="container">
        <div className="row">
          <div className="col-lg-3 headshot">
            <img className="img img thumbnail headshot" src={Headshot}
              alt="headshot of a woman smiling." />
          </div>
    
          <div className="col-lg-9 about-info text"  id="aboutMe">
            <p>Enthusiastic entry level web developer eager to contribute to team success through hard work, attention to detail and excellent organizational skills. Equipped with a diverse and promising skill-set. Proficient in an assortment of technologies, including Javascript, Node, mySQL, Sequelize, Express, APIs, Handlebars, HTML5, CSS, and Bootstrap.  Able to effectively self-manage during independent projects, as well as collaborate in a team setting.
            </p>
            {/* <p>
              Her educational background is in full stack web development at the University of Minnesota Web Development Bootcamp. At the end of the program, she will have the tools to design and create professional, easy to use websites.
            </p> */}
            <p>On her days off she enjoys gardening, playing bass guitar, listening to audiobooks, and cuddling with her two
              cats.
            </p>
            <p id="media-links"> Connect with Lita: <br></br>
            <a href="tel:612-558-4804">
              <img className="img img thumbnail icon" src={PhoneIcon} alt="phone icon" />
            </a>
            <a href="mailto:litabeach123@gmail.com">
              <img className="img img thumbnail icon" src={EmailIcon} alt ="email icon" />
            </a>
            <a href="https://github.com/Litabeach">
              <img className="img img thumbnail icon" src={GithubIcon} alt ="github icon" />
            </a>
            <a href="https://www.linkedin.com/in/lita-beach">
              <img className="img img thumbnail icon" src={LinkedInIcon} alt = "linkedin icon" />
            </a>
            <a href="https://www.facebook.com/lita.beach/">
              <img className="img img thumbnail icon" src={FBIcon} alt ="facebook icon" />
            </a>
            </p>
          </div>
        </div>
      </main>
      );
    }
  
  
  export default Home;