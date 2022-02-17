import React from 'react';
import logo_inverted from "../logo_inverted.jpg";
// REACT FONT AWESOME FONTS //
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
import Resume from "../june_kang_resume.pdf";


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
            <div className="container">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style= {{ color: "#fff" }}/>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link smooth={true} to="home" offset={-110} className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="About" offset={-110} className="nav-link" href="#">About me</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link smooth={true} to="Resume" offset={-110} className="nav-link" href="">Resume</Link>
                        </li> */}
                        {/* <li className="nav-item">
                            <Link smooth={true} to="Experiences" offset={-110} className="nav-link" href="#">Experiences</Link>
                        </li> */}
                        <li className="nav-item">
                            <Link smooth={true} to="Portfolio" offset={-110} className="nav-link" href="#">Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="Contacts" offset={-110} className="nav-link" href="#">Contacts</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={Resume} target="_blank" rel="noReferrer">Resume</a>
                        </li>
                    </ul>
                    <br></br>
                </div>
                {/* <div className="resume">
                    <a className="resume-a"href={Resume} target="_blank" rel="noReferrer">Resume</a>
                </div> */}
            </div>
        </nav>
    )
}

export default Navbar
