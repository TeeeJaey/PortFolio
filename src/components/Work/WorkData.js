import React, { useEffect } from "react";
import { MdClose } from "react-icons/md";
import "./WorkData.css";

export default function WorkData({ data, onClose }) {
    return (
        <>
            <div className="work-data-overlay" />
            <div className="work-data-container">
                <MdClose className="word-data-close-btn" onClick={() => onClose()} />
                <img src={data.image}></img>
                <div className="work-data"></div>
            </div>
        </>
    );
}
