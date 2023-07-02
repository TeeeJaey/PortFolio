import React, { useEffect } from "react";
import "./About.css";
import { menuBarIndex } from "../../Constants";
import { getExperience } from "../Experience/Experience";
import { Link } from "react-router-dom";

export default function About({ selectedTab, setSelectedTab }) {
    useEffect(() => {
        if (selectedTab !== menuBarIndex.About) {
            document.getElementById("about").classList.add("off");
        } else {
            document.getElementById("about").classList.remove("off");
        }
    }, [selectedTab]);

    return (
        <>
            <div id="about" className="main-view off">
                <div className="header">About</div>

                <div className="content-container">
                    <div className="content">
                        Hi, I am <span className="highlight name">Tejas Jadhav</span>.
                        <br /> A 90s kid living in Mumbai.
                    </div>
                    <div className="content">
                        Full-Stack / Front-end <span className="highlight"> Web Developer </span> & FreeLancer with over
                        <span className="highlight"> {getExperience().years} years of experience</span>.
                        <br />I have a <span className="highlight">Master degree</span> in Computer Engineering.
                    </div>
                    <div className="content">
                        Well-organised nerd with passion of <span className="highlight"> solving problems </span> having high attention to detail.
                        <br />A huge fan of <span className="highlight">cricket </span>, PC games and TV shows
                    </div>

                    <div className="content">
                        Interested in working with me ?
                        <br />
                        <Link to={"/Contact"}>
                            <div
                                className="link"
                                onClick={() => {
                                    setSelectedTab(menuBarIndex.Contact);
                                }}
                            >
                                Let's get in Touch
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
