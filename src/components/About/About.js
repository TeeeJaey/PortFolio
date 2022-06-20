import React, { useEffect } from "react";
import "./About.css";

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
            <div id="about" className="main-view">
                <div className="header">About Me</div>
                <div className="content">
                    Hey, I am <span class="highlight">Tejas Jadhav.</span>
                    <br />A <span class="highlight">Full-Stack web developer </span> with over
                    <span class="highlight"> 4 years of experience.</span>
                    <br />I have a <span class="highlight">Master degree</span> in Computer Engineering.
                </div>

                <div className="content">
                    Well-organised person, <span class="highlight">problem solver</span>, independent employee with high attention to detail.
                    <br />A huge fan of <span class="highlight">cricket </span> and TV shows
                </div>

                <div className="content">
                    Interested in working with me ?
                    <br />
                    <span
                        class="link"
                        onClick={() => {
                            setSelectedTab(6);
                        }}
                    >
                        Let's get in Touch
                    </span>
                </div>
            </div>
        </>
    );
}
