import React from 'react';
import { SocialIcon } from "react-social-icons";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>New York, New York</p>
                        </div>
                        <div className="d-flex">
                            <p>jkang34@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <a className="footer-nav">Home</a>
                                <br />
                                <a className="footer-nav">About me</a>
                            </div>
                            <div className="col">
                                <a className="footer-nav">Portfolio</a>
                                <br />
                                <a className="footer-nav">Contacts</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center">
                            <div className="contact-linkedin">
                                <SocialIcon target="_blank" url="https://www.linkedin.com/in/june-kang-24a429191/" fgColor="white" bgColor="blue" />  
                            </div>
                            <div className="contact-github">
                                <SocialIcon target="_blank" url="https://github.com/Jkang91" fgColor="white" bgColor="dark-gray" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
