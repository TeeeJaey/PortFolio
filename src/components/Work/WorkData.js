import React from "react";
import { MdClose, MdSmartDisplay } from "react-icons/md";
import { RiCodeBoxFill } from "react-icons/ri";
import "./WorkData.css";
import { Link } from "react-router-dom";

export default function WorkData({ data, onClose }) {
    return (
        <div className="work-data">
            <div className="work-data-container">
                <Link to="/Work">
                    <MdClose className="word-data-close-btn" onClick={() => onClose()} />
                </Link>
                <img src={data.image} alt={data.id}></img>

                <div className="work-data-right">
                    <div className="d-flex">
                        <div className="title">{data.title}</div>
                        <div className="timespan">{data.time}</div>
                    </div>
                    <div className="techstack">
                        {data.techstack.map((tech, index) => (
                            <span key={index} className="techstack-item">
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="work-btns">
                        {data.liveUrl && (
                            <div className="work-btn" onClick={() => window.open(data.liveUrl)}>
                                Run Live <MdSmartDisplay className="work-btn-icon" />
                            </div>
                        )}
                        {data.codeUrl && (
                            <div className="work-btn" onClick={() => window.open(data.codeUrl)}>
                                View Code <RiCodeBoxFill className="work-btn-icon" />
                            </div>
                        )}
                    </div>
                </div>

                <div className="work-data-bottom">
                    <h4>Description</h4>
                    <ul className="work-data-desc">
                        {data.description.map((desc, index) => (
                            <li key={index}>{desc}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
