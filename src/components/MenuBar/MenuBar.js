import React, { useEffect } from "react";
import "./MenuBar.css";
import TJsvg from "./TJsvg";
import { MdClose } from "react-icons/md";
import menuBG from "../../images/menuBG.png";
import { Link } from "react-router-dom";

export default function MenuBar({ selectedTab, menuBtns, setSelectedTab, showingMobileMenu, setShowingMobileMenu }) {
    useEffect(() => {
        const btnanimatedList = document.getElementsByClassName("menu-btn");
        for (let i = btnanimatedList.length - 1; i >= 0; i--) {
            btnanimatedList[i].classList.add("animated");
        }

        const menuBar = document.getElementsByClassName("menu-bar");
        for (let i = menuBar.length - 1; i >= 0; i--) {
            menuBar[i].classList.remove("animated");
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

    useEffect(() => {
        const menuBar = document.getElementsByClassName("menu-bar");
        if (showingMobileMenu) {
            menuBar[0].classList.add("showing");
        } else {
            menuBar[0].classList.remove("showing");
        }
    }, [showingMobileMenu]);

    return (
        <>
            <div className="menu-bar showing animated">
                <div className="menu-bg-color"></div>
                <img className="menu-bg" src={menuBG} alt="menu-bg" />

                <div className="mobile-close-icon" onClick={() => setShowingMobileMenu(false)}>
                    <MdClose />
                </div>
                <Link to="/">
                    <div
                        className="text-svg animated"
                        onClick={() => {
                            setSelectedTab(-1);
                            setShowingMobileMenu(false);
                        }}
                    >
                        <TJsvg />
                    </div>
                </Link>
                <div className="menu-btns">
                    {menuBtns.map((menuBtn, index) => {
                        return (
                            <Link to={"/" + menuBtn} key={index}>
                                <div
                                    className={"menu-btn  btn" + index + (selectedTab === index ? " selected" : "")}
                                    onClick={() => {
                                        setSelectedTab(index);
                                        setShowingMobileMenu(false);
                                    }}
                                >
                                    {menuBtn}
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
