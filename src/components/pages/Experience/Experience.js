import React from "react";
import "../Edu-Exp.css";
import "./Experience.css";
import { ExperienceDataList } from "./ExperienceDataList.js";
import { useVisible, menuBarIndex } from "../../../helpers";

export function getExperience() {
    const dateFrom = new Date("2018-07-18");
    const dateTo = new Date();
    const totalMonths = dateTo.getMonth() - dateFrom.getMonth() + 12 * (dateTo.getFullYear() - dateFrom.getFullYear());
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;
    return { years, months };
}
function formatExperience() {
    const { years, months } = getExperience();
    return years + " years, " + months + " months";
}

export function Experience({ selectedTab }) {
    const page = useVisible(selectedTab, menuBarIndex.Experience);

    return (
        <>
            <div id={page} className="main-view off">
                <div className="header">Experience</div>
                <div className="total-exp">{formatExperience()}</div>

                <div className="content-container">
                    {ExperienceDataList.map(exp => (
                        <div className="d-flex edex-item">
                            <div className="edex-span">{exp.time}</div>
                            <div className="edex-value">
                                <div className="edex-title">{exp.title}</div>
                                <div className="edex-company">{exp.company}</div>
                                <div className="edex-techstack">
                                    {exp.techstack.map(techItem => (
                                        <span className="techstack-item">{techItem}</span>
                                    ))}
                                </div>
                                {exp.projects.map(project => (
                                    <div className="edex-project">
                                        <div className="edex-projectname">Project: {project.project} </div>
                                        <ul className="edex-content">
                                            {project?.content.map(contentItem => (
                                                <li>{contentItem}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                                <div className="edex-image-mobile">
                                    <img src={exp.image} alt={exp.id + "Image"} />
                                </div>
                            </div>
                            <div className="edex-image">
                                <img src={exp.image} alt={exp.id + "Image"} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
