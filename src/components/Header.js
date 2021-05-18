import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";

const Header = () => {

    return (
        <div id="home" className="header-wraper">
            <div className="main-info">
                <h1>June Kang</h1>
                <Typed 
                    className="typed-text"
                    strings={["Web Design", "Web Development", "Full-stack Software Engineer"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <Link smooth={true} to="Contacts" href="#" className="btn-main-offer">Contact me</Link>
            </div>
        </div>
    )
}

export default Header;
