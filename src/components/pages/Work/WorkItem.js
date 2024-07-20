import React from "react";
import "./WorkItem.css";
import { Link } from "react-router-dom";

export default function WorkItem({ image, name, workItemClicked }) {
    return (
        <li>
            <Link to={name}>
                <div className="work-item" onClick={() => workItemClicked(name)}>
                    <img src={image} alt={name}></img>
                    <div className="work-item-overlay"></div>
                </div>
            </Link>
        </li>
    );
}
