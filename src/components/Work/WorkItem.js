import React, { useEffect } from "react";
import "./WorkItem.css";

export default function WorkItem({ image }) {
    return (
        <li>
            <div className="work-item lazyloaded">
                <img src={image}></img>
                <div className="work-item-overlay "></div>
            </div>
        </li>
    );
}
