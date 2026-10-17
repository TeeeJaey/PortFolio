import React, { useEffect } from "react";
import "./Welcome.css";
import myImg from "../../../images/rz-tj.jpeg";
import { useVisible, menuBarIndex } from "../../../helpers";

const addAnimation = element => {
    element.classList.add("animate");
    setTimeout(() => {
        element.classList.remove("animate");
    }, 750);
};

export function Welcome({ selectedTab }) {
    const page = useVisible(selectedTab, menuBarIndex.Welcome);

    useEffect(() => {
        const letters = ["T", "E", "J", "A", "S"].map(id => document.getElementById(id));
        const timeouts = letters.map((el, i) => setTimeout(() => addAnimation(el), 1000 + i * 100));
        const handlers = letters.map(el => () => addAnimation(el));

        letters.forEach((el, i) => el.addEventListener("mouseover", handlers[i]));

        return () => {
            timeouts.forEach(clearTimeout);
            letters.forEach((el, i) => el.removeEventListener("mouseover", handlers[i]));
        };
    }, []);

    return (
        <div id={page} className="main-view off">
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
                    <div className="welcome-caption">Software Developer</div>
                    <hr style={{ borderColor: "rgb(5 253 216 / 0.5)" }} />
                </div>
                <div className="profile-pic">
                    <img src={myImg} alt="Tejas Jadhav" />
                </div>
            </div>
        </div>
    );
}
