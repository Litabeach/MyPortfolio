import React from "react";
import EmailIcon from '../Images/email.jpg';
import PhoneIcon from '../Images/phone.jpg';
import GithubIcon from '../Images/githubicon.png';
import LinkedInIcon from '../Images/linkedinicon.jpg';
import "./style.css";


function Contact() {


    return (
        <div>
            <h3>Contact Lita:</h3>
            <h5>Email:</h5>
            <a href="mailto:litabeach123@gmail.com" className="links" >
            <img className="img img thumbnail icon" src={EmailIcon} alt={"email icon"} />
                litabeach123@gmail.com </a> 

            <h5>Phone:</h5>
            <a href="tel:612-558-4804" className="links" >
            <img className="img img thumbnail icon" src={PhoneIcon} alt={"phone icon"} />
                612-558-4804</a> 
            
            <h5>Github:</h5>
            <a href="https://github.com/Litabeach" className="links" >
            <img className="img img thumbnail icon" src={GithubIcon} alt={"github icon"} />
            https://github.com/Litabeach </a> 

            <h5>LinkedIn:</h5>
            <a href="https://www.linkedin.com/in/lita-beach" className="links" >
            <img className="img img thumbnail icon" src={LinkedInIcon} alt={"LinkedIn icon"} />
            https://www.linkedin.com/in/lita-beach </a> 
          
        </div>

    )
}


export default Contact;

