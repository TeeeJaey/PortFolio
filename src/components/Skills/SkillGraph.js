import React, { useEffect } from "react";
import "./SkillGraph.css";

export default function SkillGraph({ skill }) {
    return (
        <div className="skill-graph">
            {skill.title}
            <div className="graph-container">
                {skill.items.map((item, index) => {
                    return (
                        <div key={index} className="skill-item">
                            <span className="title">{item.title}</span>
                            <span className="skill-bar">
                                <span className={"skill-bar-filled point-" + item.points}></span>
                                <span className="skill-points">{item.points}</span>
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
