import React, { useEffect } from "react";
import "./MenuBar.css";
import TJsvg from "./TJsvg";
import myImg from "../../images/myTrImg.png";

export default function MenuBar({ selectedTab, menuBtns, setSelectedTab }) {
    useEffect(() => {
        const btnanimatedList = document.getElementsByClassName("menu-btn");
        for (let i = btnanimatedList.length - 1; i >= 0; i--) {
            btnanimatedList[i].classList.add("animated");
        }
        const baranimatedList = document.getElementsByClassName("menu-bar animated");
        for (let i = baranimatedList.length - 1; i >= 0; i--) {
            baranimatedList[i].classList.remove("animated");
        }
        const timeout = setTimeout(() => {
            const animatedList = document.getElementsByClassName("animated");
            for (let i = animatedList.length - 1; i >= 0; i--) {
                animatedList[i].classList.remove("animated");
            }
        }, 1800);

        return () => {
            clearTimeout(timeout);
        };
    }, []);

    return (
        <>
            <div className="menu-bar animated">
                <div className="menu-bg-color"></div>
                <div className="menu-bg"></div>
                <div className="text-svg animated">
                    <TJsvg />
                </div>
                <div className="profile-pic animated">
                    <img src={myImg} />
                </div>
                <div className="menu-btns">
                    {menuBtns.map((menuBtn, index) => {
                        return (
                            <div
                                key={index}
                                className={"menu-btn  btn" + index + (selectedTab == index ? " selected" : "")}
                                onClick={() => setSelectedTab(index)}
                            >
                                {menuBtn}
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
