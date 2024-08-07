import React from "react";
import "./About.css";
import { getExperience } from "../Experience/Experience";
import { Link } from "react-router-dom";
import { useVisible, menuBarIndex } from "../../../helpers";

export function About({ selectedTab, setSelectedTab }) {
    const page = useVisible(selectedTab, menuBarIndex.About);

    return (
        <>
            <div id={page} className="main-view off">
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
                        Well-organised nerd with passion of <span className="highlight"> solving problems </span> having
                        high attention to detail.
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
