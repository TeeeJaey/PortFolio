import React, { useEffect } from "react";
import "./WorkItem.css";

export default function WorkItem({ image, name, workItemClicked }) {
    return (
        <li>
            <div className="work-item" onClick={() => workItemClicked(name)}>
                <img src={image}></img>
                <div className="work-item-overlay"></div>
            </div>
        </li>
    );
}
