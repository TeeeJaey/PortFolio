import React, { useEffect } from "react";
import "./Skills.css";
import { SkillList } from "./SkillList";
import SkillGraph from "./SkillGraph";
import { useVisible, menuBarIndex } from "../../../helpers";

export function Skills({ selectedTab }) {
    const page = useVisible(selectedTab, menuBarIndex.Skills);

    useEffect(() => {
        const skillBars = document.getElementsByClassName("skill-bar-filled");

        if (selectedTab !== menuBarIndex.Skills) {
            for (let skillBar of skillBars) {
                skillBar.classList.add("width-0");
            }
        } else {
            setTimeout(() => {
                for (let skillBar of skillBars) {
                    skillBar.classList.remove("width-0");
                }
            }, 800);
        }
    }, [selectedTab]);

    return (
        <div id={page} className="main-view off">
            <div className="header">Skills</div>

            <div className="content-container">
                {SkillList.map((skill, index) => (
                    <SkillGraph key={index} skill={skill} />
                ))}
            </div>
        </div>
    );
}
