import React, { useEffect } from "react";
import { MdClose, MdSmartDisplay } from "react-icons/md";
import { RiCodeBoxFill } from "react-icons/ri";
import "./WorkData.css";

export default function WorkData({ data, onClose }) {
    return (
        <div className="work-data">
            <div className="work-data-container">
                <MdClose className="word-data-close-btn" onClick={() => onClose()} />
                <img src={data.image}></img>

                <div className="work-data-right">
                    <div className="d-flex">
                        <div className="title">{data.title}</div>
                        <div className="timespan">{data.time}</div>
                    </div>
                    <div className="techstack">
                        {data.techstack.map(tech => (
                            <span className="techstack-item">{tech}</span>
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
                        {data.description.map(desc => (
                            <li>{desc}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
