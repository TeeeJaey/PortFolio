import React, { useEffect, useState } from "react";
import About from "./About/About";
import MenuBar from "./MenuBar/MenuBar";
import Submarine from "./Submarine/Submarine";
import Welcome from "./Welcome/Welcome";
import "./Main.css";
import Contact from "./Contact/Contact";
import { FaBars } from "react-icons/fa";
import Bubbles from "./Bubbles/Bubbles";

export const menuBarIndex = {
    Welcome: -1,
    About: 0,
    Experience: 1,
    Skills: 2,
    Education: 3,
    Work: 4,
    Interests: 5,
    Contact: 6,
};
const menuBtns = ["About", "Experience", "Skills", "Education", "Work", "Interests", "Contact"];

export default function Main() {
    const [selectedTab, setSelectedTab] = useState(-2);
    const [showingMobileMenu, setShowingMobileMenu] = useState(false);

    useEffect(() => {
        setTimeout(() => setSelectedTab(-1), 500);
    }, []);

    return (
        <div style={{ display: "flex" }}>
            <div className="mobile-menu-btn" onClick={() => setShowingMobileMenu(true)}>
                <FaBars />
            </div>

            <MenuBar
                showingMobileMenu={showingMobileMenu}
                setShowingMobileMenu={showing => setShowingMobileMenu(showing)}
                selectedTab={selectedTab}
                menuBtns={menuBtns}
                setSelectedTab={tab => setSelectedTab(tab)}
            />
            <Submarine />
            <Welcome selectedTab={selectedTab} />
            <About selectedTab={selectedTab} setSelectedTab={tab => setSelectedTab(tab)} />
            <Contact selectedTab={selectedTab} setSelectedTab={tab => setSelectedTab(tab)} />
        </div>
    );
}
