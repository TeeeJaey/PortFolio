import React from "react";
import { MdClose, MdSmartDisplay } from "react-icons/md";
import { RiCodeBoxFill } from "react-icons/ri";
import "./WorkOpen.css";
import { Link } from "react-router-dom";

export default function WorkOpen({ work, onClose }) {
    return (
        <div className="work-open">
            <div className="work-open-container">
                <Link to="/Work">
                    <MdClose className="word-open-close-btn" onClick={() => onClose()} />
                </Link>
                <img src={work.image} alt={work.id}></img>

                <div className="work-open-right">
                    <div className="d-flex">
                        <div className="title">{work.title}</div>
                        <div className="timespan">{work.time}</div>
                    </div>
                    <div className="techstack">
                        {work.techstack.map((tech, index) => (
                            <span key={index} className="techstack-item">
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="work-btns">
                        {work.liveUrl && (
                            <div className="work-btn" onClick={() => window.open(work.liveUrl)}>
                                Run Live <MdSmartDisplay className="work-btn-icon" />
                            </div>
                        )}
                        {work.codeUrl && (
                            <div className="work-btn" onClick={() => window.open(work.codeUrl)}>
                                View Code <RiCodeBoxFill className="work-btn-icon" />
                            </div>
                        )}
                    </div>
                </div>

                <div className="work-open-bottom">
                    <h4>Description</h4>
                    <ul className="work-open-desc">
                        {work.description.map((desc, index) => (
                            <li key={index}>{desc}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
