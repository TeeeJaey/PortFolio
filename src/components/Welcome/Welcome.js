import React, { useEffect } from "react";
import "./Welcome.css";
import { menuBarIndex } from "../../Constants";
import myImg from "../../images/profileTransparent.png";

export default function Welcome({ selectedTab }) {
    useEffect(() => {
        if (selectedTab !== menuBarIndex.Welcome) {
            document.getElementById("welcome").classList.add("off");
        } else {
            document.getElementById("welcome").classList.remove("off");

            const addAnimation = e => {
                console.log(e.target);
                e.target.classList.add("animate");
                setTimeout(() => {
                    e.target.classList.remove("animate");
                }, 750);
            };

            document.getElementById("T").addEventListener("mouseover", addAnimation);
            document.getElementById("E").addEventListener("mouseover", addAnimation);
            document.getElementById("J").addEventListener("mouseover", addAnimation);
            document.getElementById("A").addEventListener("mouseover", addAnimation);
            document.getElementById("S").addEventListener("mouseover", addAnimation);

            return () => {
                document.getElementById("T").removeEventListener("mouseover", addAnimation);
                document.getElementById("E").removeEventListener("mouseover", addAnimation);
                document.getElementById("J").removeEventListener("mouseover", addAnimation);
                document.getElementById("A").removeEventListener("mouseover", addAnimation);
                document.getElementById("S").removeEventListener("mouseover", addAnimation);
            };
        }
    }, [selectedTab]);

    return (
        <>
            <div id="welcome" className="main-view off">
                <div className="content-container d-flex">
                    <div>
                        <div className="welcome-content">
                            Hi, <br />
                            I'm{" "}
                            <span className="welcome-name waviy">
                                <span className="waviy-char" id="T">
                                    T
                                </span>
                                <span className="waviy-char" id="E">
                                    E
                                </span>
                                <span className="waviy-char" id="J">
                                    J
                                </span>
                                <span className="waviy-char" id="A">
                                    A
                                </span>
                                <span className="waviy-char" id="S">
                                    S
                                </span>
                            </span>
                        </div>
                        <hr style={{ borderColor: "rgb(5 253 216 / 0.5)" }} />
                        <div className="welcome-caption">Web Developer</div>
                        <hr style={{ borderColor: "rgb(5 253 216 / 0.5)" }} />
                    </div>
                    <div className="profile-pic">
                        <img src={myImg} />
                    </div>
                </div>
            </div>
        </>
    );
}
