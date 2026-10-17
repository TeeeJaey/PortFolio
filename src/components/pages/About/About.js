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
                    Hi, I am <span className="highlight name">Tejas</span>. You can call me TJ
                </div>
                <div className="content">
                    A <span className="highlight">Senior Software Engineer</span> at
                    <span className="highlight"> Razer</span> with over
                    <span className="highlight"> {getExperience().years} years of experience</span> in JavaScript.
                    <br />I hold a <span className="highlight">Master's degree</span> in Computer Engineering.
                </div>
                <div className="content">
                    A well-organised nerd with a passion for <span className="highlight">solving problems</span> and a
                    keen eye for detail.
                </div>
                <div className="content">
                    I enjoy building websites and applications with <span className="highlight">React</span> and the
                    <span className="highlight"> MERN stack</span>, with a focus on frontend.
                </div>
                <div className="content">
                    I love using <span className="highlight">AI</span> to create apps, turning ideas into working
                    products faster with tools like <span className="highlight">Claude</span> and
                    <span className="highlight"> Codex</span>.
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
