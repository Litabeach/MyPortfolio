import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import resume from "../../assets/LitaBeachResume.pdf"


function Header() {
    return (
        <nav className="navbar navbar-dark navbar-expand-md justify-content-center">
            <Link className="navbar-brand d-flex w-50 mr-auto" to="/">Lita Beach</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar3">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse w-100" id="collapsingNavbar3">
                <ul className="nav navbar-nav ml-auto w-100 justify-content-end">
                    <li className="nav-item">
                    <Link to="/" className="nav-link" activeclassname="nav-link active">About</Link></li>
                    <li className="nav-item">
                    <Link to="/contact" className="nav-link" activeclassname="nav-link active">Contact</Link></li>
                    <li className="nav-item">
                    <Link to="/portfolio" className="nav-link" activeclassname="nav-link active">Portfolio</Link></li>
                    <li className="nav-item">
                        <a className="nav-link" activeclassname="nav-link active" href={resume}>Resume</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;