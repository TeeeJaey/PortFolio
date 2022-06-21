import React, { useEffect, useState } from "react";
import About from "./About/About";
import MenuBar from "./MenuBar/MenuBar";
import Submarine from "./Submarine/Submarine";
import "./Main.css";
import Contact from "./Contact/Contact";
import { FaBars } from "react-icons/fa";

export default function Main() {
    const [selectedTab, setSelectedTab] = useState(-1);
    const [showingMobileMenu, setShowingMobileMenu] = useState(false);

    const menuBtns = ["About", "Experience", "Skills", "Education", "Work", "Interests", "Contact"];
    useEffect(() => {
        setTimeout(() => setSelectedTab(0), 500);
    }, []);

    return (
        <div style={{ display: "flex" }}>
            <div class="mobile-menu-btn" onClick={() => setShowingMobileMenu(true)}>
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
            <About selectedTab={selectedTab} setSelectedTab={tab => setSelectedTab(tab)} />
            <Contact selectedTab={selectedTab} setSelectedTab={tab => setSelectedTab(tab)} />
        </div>
    );
}
