import React, { useState } from "react";
import MenuBar from "./MenuBar/MenuBar";
import Submarine from "./Submarine/Submarine";

export default function Main() {
    const [selectedTab, setSelectedTab] = useState(0);

    const menuBtns = ["About", "Experience", "Skills", "Education", "Work", "Interests", "Contact"];

    return (
        <div style={{ display: "flex" }}>
            <MenuBar selectedTab={selectedTab} menuBtns={menuBtns} setSelectedTab={tab => setSelectedTab(tab)} />
            <Submarine />
        </div>
    );
}
