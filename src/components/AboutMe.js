import React from "react";
import author from "../my_pic.jpg";

const AboutMe = () => {
    return (
        <div id="About" className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img className="profile-img" src={author} alt="author..." />
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">About me</h1>
                    <p>
                        Full stack Software Engineer with a drive to create applications that can help people globally.
                        Proficient in Javascript, Ruby, Rails, and React.  Background experience in healthcare and customer services.
                        
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
