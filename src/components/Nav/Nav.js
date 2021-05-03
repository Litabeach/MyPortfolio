import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

<nav classNameName="navbar navbar-expand-lg navbar-light bg-light">
    <Link classNameName="navbar-brand" to="/">
        GitHub JobWatcher
</Link>
    <div>
        <ul classNameName="navbar-nav">
            <li classNameName="nav-item">
                <Link
                    to="/"
                    classNameName={
                        window.location.pathname === "/" || window.location.pathname === "/home"
                            ? "nav-link active"
                            : "nav-link"
                    }
                >
                    Home
      </Link>
            </li>
        </ul>
    </div>
</nav>

function Nav() {
    return (
        <nav className="navbar navbar-dark navbar-expand-md justify-content-center">
            <Link className="navbar-brand d-flex w-50 mr-auto" to="/">Lita Beach</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar3">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse w-100" id="collapsingNavbar3">
                <ul className="nav navbar-nav ml-auto w-100 justify-content-end">
                    <li className="nav-item">
                        <Link
                            to="/"
                            className={
                                window.location.pathname === "/" || window.location.pathname === "/home"
                                    ? "nav-link active"
                                    : "nav-link"
                            }
                        >
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/contact"
                            className={
                                window.location.pathname === "/contact" 
                                    ? "nav-link active"
                                    : "nav-link"
                            }
                        >
                           Contact
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/portfolio"
                            className={
                                window.location.pathname === "/portfolio" 
                                    ? "nav-link active"
                                    : "nav-link"
                            }
                        >
                            Portfolio
                        </Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="02-CSS-Bootstrap/Assets/LitaBeachResume.pdf">Resume</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;