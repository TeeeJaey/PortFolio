import React, { useEffect } from "react";
import "./Welcome.css";
import { menuBarIndex } from "../../Constants";
import myImg from "../../images/profileTransparent.png";

export default function Welcome({ selectedTab }) {
    const addAnimation = element => {
        element.classList.add("animate");
        setTimeout(() => {
            element.classList.remove("animate");
        }, 750);
    };

    const animateName = () => {
        const T = document.getElementById("T");
        const E = document.getElementById("E");
        const J = document.getElementById("J");
        const A = document.getElementById("A");
        const S = document.getElementById("S");

        setTimeout(() => addAnimation(T), 1000);
        setTimeout(() => addAnimation(E), 1100);
        setTimeout(() => addAnimation(J), 1200);
        setTimeout(() => addAnimation(A), 1300);
        setTimeout(() => addAnimation(S), 1400);

        T.addEventListener("mouseover", () => addAnimation(T));
        E.addEventListener("mouseover", () => addAnimation(E));
        J.addEventListener("mouseover", () => addAnimation(J));
        A.addEventListener("mouseover", () => addAnimation(A));
        S.addEventListener("mouseover", () => addAnimation(S));

        return () => {
            T.removeEventListener("mouseover", () => addAnimation(T));
            E.removeEventListener("mouseover", () => addAnimation(E));
            J.removeEventListener("mouseover", () => addAnimation(J));
            A.removeEventListener("mouseover", () => addAnimation(A));
            S.removeEventListener("mouseover", () => addAnimation(S));
        };
    };

    useEffect(() => {
        if (selectedTab !== menuBarIndex.Welcome) {
            document.getElementById("welcome").classList.add("off");
        } else {
            document.getElementById("welcome").classList.remove("off");
        }
        return animateName();
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
                        <div className="welcome-caption">Software Developer</div>
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
