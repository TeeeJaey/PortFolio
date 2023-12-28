import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import About from "./About/About";
import MenuBar from "./MenuBar/MenuBar";
import Submarine from "./Submarine/Submarine";
import Welcome from "./Welcome/Welcome";
import "./Main.css";
import Contact from "./Contact/Contact";
import { FaBars } from "react-icons/fa";
import Bubbles from "./Bubbles/Bubbles";
import Experience from "./Experience/Experience";
import Education from "./Education/Education";
import Skills from "./Skills/Skills";
import Work from "./Work/Work";
import Interests from "./Interests/Interests";
import { menuBarIndex, menuBtns } from "../Constants";

export default function Main() {
    const location = useLocation();
    const [selectedTab, setSelectedTab] = useState(-2);
    const [showingMobileMenu, setShowingMobileMenu] = useState(false);

    useEffect(() => {
        const path = location.pathname.split("/")[1];
        if (path) setTimeout(() => setSelectedTab(menuBtns.indexOf(path)), 500);
        else setTimeout(() => setSelectedTab(menuBarIndex.Welcome), 500);
    }, []);

    return (
        <div style={{ display: "flex" }}>
            <div className="mobile-menu-btn" onClick={() => setShowingMobileMenu(true)}>
                <FaBars />
            </div>
            <Bubbles />

            <MenuBar
                showingMobileMenu={showingMobileMenu}
                setShowingMobileMenu={showing => setShowingMobileMenu(showing)}
                selectedTab={selectedTab}
                menuBtns={menuBtns}
                setSelectedTab={tab => setSelectedTab(tab)}
            />
            <Submarine />
            <Routes>
                <Route path="/" element={<Welcome selectedTab={selectedTab} />} />
                <Route path={"/" + menuBtns[0]} element={<About selectedTab={selectedTab} setSelectedTab={tab => setSelectedTab(tab)} />} />
                <Route path={"/" + menuBtns[1]} element={<Experience selectedTab={selectedTab} />} />
                <Route path={"/" + menuBtns[2]} element={<Skills selectedTab={selectedTab} />} />
                <Route path={"/" + menuBtns[3]} element={<Education selectedTab={selectedTab} />} />
                <Route path={"/" + menuBtns[4] + "/*"} element={<Work selectedTab={selectedTab} setSelectedTab={tab => setSelectedTab(tab)} />} />
                <Route path={"/" + menuBtns[5]} element={<Contact selectedTab={selectedTab} />} />
                <Route path={"/Resume"} element={<RedirectPage url={"https://drive.google.com/file/d/1gfGhRxDbSj5LKB2D0EsdT5Ja3Ley6tH8/view"} />} />
            </Routes>
        </div>
    );
}

const RedirectPage = ({ url }) => {
    React.useEffect(() => {
        window.location.replace(url);
    }, []);
    return null;
};
