import React, { useEffect } from "react";
import "./Skills.css";
import { menuBarIndex } from "../../Constants";
import { SkillList } from "./SkillList";
import SkillGraph from "./SkillGraph";

export default function Skills({ selectedTab }) {
    useEffect(() => {
        const skillBars = document.getElementsByClassName("skill-bar-filled");

        if (selectedTab !== menuBarIndex.Skills) {
            document.getElementById("skills").classList.add("off");
            for (let skillBar of skillBars) {
                skillBar.classList.add("width-0");
            }
        } else {
            document.getElementById("skills").classList.remove("off");
            setTimeout(() => {
                for (let skillBar of skillBars) {
                    skillBar.classList.remove("width-0");
                }
            }, 800);
        }
    }, [selectedTab]);

    return (
        <>
            <div id="skills" className="main-view off">
                <div className="header">Skills</div>

                <div className="content-container">
                    {SkillList.map((skill, index) => (
                        <SkillGraph key={index} skill={skill} />
                    ))}
                </div>
            </div>
        </>
    );
}
