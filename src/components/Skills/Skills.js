import React, { useEffect } from "react";
import "./Skills.css";
import { menuBarIndex } from "../Main";

export default function Skills({ selectedTab }) {
    useEffect(() => {
        if (selectedTab !== menuBarIndex.Skills) {
            document.getElementById("skills").classList.add("off");
        } else {
            document.getElementById("skills").classList.remove("off");
        }
    }, [selectedTab]);

    return (
        <>
            <div id="skills" className="main-view off">
                <div className="header">Skills</div>

                <div className="content-container"></div>
            </div>
        </>
    );
}
