import React from 'react'
import grooveit from "../images/grooveit.png";
import dayMaker from "../images/day-maker.png";
// FONT AWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {
    //Grooveit
    const openPopGrooveit = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={grooveit} alt="grooveit..." />
                <p>A Web application that users can watch and learn how to dance.</p>
                <b>Demo: </b><a className="hyper-link" onClick={() => window.open("https://grooveit.netlify.app/")}>Grooveit</a>
            </>
        )
        PopupboxManager.open({content})
    }
    const popupboxConfigGrooveit = {
        titleBar: {
            enable: true,
            text: "Grooveit"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    //DayMaker
    const openPopDayMaker = () => {
        const content = (
            <>
                <img className="portfolio-image-popupbox" src={dayMaker} alt="dayMaker..." />
                <p>Application that generates a day filled with randomized activities.</p>
                <b>Demo: </b><a className="hyper-link" onClick={() => window.open("https://day-maker.netlify.app/")}>Day Maker</a>
            </>
        )
        PopupboxManager.open({content})
    }
    const popupboxConfigDayMaker = {
        titleBar: {
            enable: true,
            text: "Day Maker"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }
    return (
        <div id="Portfolio" className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">Portfolio</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box" onClick={openPopGrooveit}>
                        <img className="portfolio-image" src={grooveit} alt="grooveit..." />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                    {/* - */}
                    <div className="portfolio-image-box" onClick={openPopDayMaker}>
                        <img className="portfolio-image" src={dayMaker} alt="daymaker..." />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                </div>
            </div>
            <PopupboxContainer {...popupboxConfigGrooveit} />
            <PopupboxContainer {...popupboxConfigDayMaker} />
        </div>
    )
}

export default Portfolio
