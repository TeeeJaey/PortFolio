import React, { useState, useEffect } from "react";
import "./Work.css";
import { WorkList } from "./WorkList";
import { menuBarIndex } from "../../Constants";
import WorkItem from "./WorkItem";
import WorkData from "./WorkData";
import { Routes, Route, useLocation } from "react-router-dom";

export default function Work({ match, selectedTab, setSelectedTab }) {
    const location = useLocation();
    const [showData, setShowData] = useState(null);

    useEffect(() => {
        if (selectedTab !== menuBarIndex.Work) {
            document.getElementById("work").classList.add("off");
        } else {
            document.getElementById("work").classList.remove("off");
            const workItem = location.pathname.split("/")[2];
            if (workItem) setTimeout(() => setShowData(workItem), 2000);
        }
    }, [selectedTab]);

    return (
        <>
            <Routes>
                <Route path={showData} element={<WorkData onClose={() => setShowData(null)} data={WorkList[showData]} />} />
            </Routes>
            <div id="work" className="main-view off">
                <div className="header">Work</div>
                <div className="text">
                    I have made some really cool <span className="highlight">personal projects</span>
                    <br />
                    Checkout my
                    <span
                        className="link"
                        onClick={() => {
                            setSelectedTab(6);
                        }}
                    >
                        {" github page "}
                    </span>
                    for more
                </div>

                <div className="work-list">
                    <ul>
                        {Object.keys(WorkList).map((key, index) => (
                            <WorkItem key={index} workItemClicked={name => setShowData(name)} image={WorkList[key].image} name={key} />
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}
