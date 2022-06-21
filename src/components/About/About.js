import React, { useEffect } from "react";
import "./About.css";
import myDegreeImg from "../../images/degreeTransparent.png";

export default function About({ selectedTab, setSelectedTab }) {
    useEffect(() => {
        if (selectedTab !== 0) {
            document.getElementById("about").classList.add("off");
        } else {
            document.getElementById("about").classList.remove("off");
        }
    }, [selectedTab]);

    return (
        <>
            <div id="about" className="main-view off">
                <div className="header">About Me</div>

                <div className="content-container">
                    <div className="content">
                        Hey, I am <span class="highlight name">Tejas Jadhav</span>.
                    </div>
                    <div className="content">
                        <br />
                        Full-Stack <span class="highlight"> Web Developer </span> with over
                        <span class="highlight"> 4 years of experience</span>.
                        <br />I have a <span class="highlight">Master degree</span> in Computer Engineering.
                    </div>
                    <div className="content">
                        Well-organised nerd with passion of <span class="highlight"> solving problems </span> having high attention to detail.
                        <br />A huge fan of <span class="highlight">cricket </span>, PC games and TV shows
                    </div>

                    <div className="content">
                        Interested in working with me ?
                        <br />
                        <div
                            class="link"
                            onClick={() => {
                                setSelectedTab(6);
                            }}
                        >
                            Let's get in Touch
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
