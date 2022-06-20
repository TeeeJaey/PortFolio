import React, { useEffect } from "react";
import "./Contact.css";

export default function Contact({ selectedTab, setSelectedTab }) {
    useEffect(() => {
        if (selectedTab !== 6) {
            document.getElementById("contact").classList.add("off");
        } else {
            document.getElementById("contact").classList.remove("off");
        }
    }, [selectedTab]);

    return (
        <>
            <div id="contact" className="main-view">
                <div className="header">Contact Me</div>
                <div className="content"></div>
            </div>
        </>
    );
}
