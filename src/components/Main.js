import React, { useEffect, useState } from "react";
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
    const [selectedTab, setSelectedTab] = useState(-2);
    const [showingMobileMenu, setShowingMobileMenu] = useState(false);

    useEffect(() => {
        setTimeout(() => setSelectedTab(menuBarIndex.Work), 500);
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

            <Welcome selectedTab={selectedTab} />
            <About selectedTab={selectedTab} setSelectedTab={tab => setSelectedTab(tab)} />
            <Experience selectedTab={selectedTab} />
            <Skills selectedTab={selectedTab} />
            <Education selectedTab={selectedTab} />
            <Work selectedTab={selectedTab} />
            <Interests selectedTab={selectedTab} />
            <Contact selectedTab={selectedTab} />
        </div>
    );
}
