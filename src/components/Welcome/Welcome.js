import React, { useEffect } from "react";
import "./Welcome.css";
import { menuBarIndex } from "../Main";
import myImg from "../../images/profileTransparent.png";

export default function Welcome({ selectedTab }) {
    useEffect(() => {
        if (selectedTab !== menuBarIndex.Welcome) {
            document.getElementById("welcome").classList.add("off");
        } else {
            document.getElementById("welcome").classList.remove("off");
        }
    }, [selectedTab]);

    return (
        <>
            <div id="welcome" className="main-view off">
                <div className="content-container d-flex">
                    <div>
                        <div className="welcome-content">
                            Hi, <br />
                            I'm <span className="welcome-name">Tejas</span>
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
