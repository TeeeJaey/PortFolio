import React from "react";
import "./About.css";
import { getExperience } from "../Experience/Experience";
import { Link } from "react-router-dom";
import { useVisible, menuBarIndex } from "../../../helpers";

export function About({ selectedTab, setSelectedTab }) {
    const page = useVisible(selectedTab, menuBarIndex.About);

    return (
        <div id={page} className="main-view off">
            <div className="header">About</div>

            <div className="content-container">
                <div className="content">
                    Hi, I am <span className="highlight name">Tejas</span>. You can call me Tehsu (テハス)
                </div>
                <div className="content">
                    A <span className="highlight">JavaScript Developer</span> with over
                    <span className="highlight"> {getExperience().years} years of experience</span>.
                    <br />I have a <span className="highlight">Master's degree</span> in I am working at
                    <span className="highlight"> JP Morgan Chase</span>.
                </div>
                <div className="content">
                    Well-organised nerd with passion of <span className="highlight"> solving problems </span> having
                    high attention to detail.
                </div>
                <div className="content">
                    I enjoy building websites and applications using the <span className="highlight">MERN stack</span>{" "}
                    with a focus in frontend.
                </div>

                <div className="content">
                    Interested in working with me ?
                    <br />
                    <Link to={"/Contact"}>
                        <div className="link" onClick={() => setSelectedTab(menuBarIndex.Contact)}>
                            Let's get in Touch
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
