import React, { useEffect, useState } from "react";
import About from "./About/About";
import MenuBar from "./MenuBar/MenuBar";
import Submarine from "./Submarine/Submarine";
import "./MainView.css";
import Contact from "./Contact/Contact";

export default function Main() {
    const [selectedTab, setSelectedTab] = useState(0);
    const menuBtns = ["About", "Experience", "Skills", "Education", "Work", "Interests", "Contact"];

    return (
        <div style={{ display: "flex" }}>
            <MenuBar selectedTab={selectedTab} menuBtns={menuBtns} setSelectedTab={tab => setSelectedTab(tab)} />
            <Submarine />
            <About selectedTab={selectedTab} setSelectedTab={tab => setSelectedTab(tab)} />
            <Contact selectedTab={selectedTab} setSelectedTab={tab => setSelectedTab(tab)} />
        </div>
    );
}
