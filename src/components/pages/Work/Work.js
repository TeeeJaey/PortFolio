import React, { useState, useEffect } from "react";
import "./Work.css";
import { WorkDataList } from "./WorkDataList";
import WorkItem from "./WorkItem";
import WorkOpen from "./WorkOpen";
import { Routes, Route, useLocation } from "react-router-dom";
import { useVisible, menuBarIndex } from "../../../helpers";

export function Work({ match, selectedTab, setSelectedTab }) {
    const location = useLocation();
    const [showData, setShowData] = useState(null);
    const page = useVisible(selectedTab, menuBarIndex.Work);

    useEffect(() => {
        if (selectedTab === menuBarIndex.Work) {
            const workItem = location.pathname.split("/")[2];
            if (workItem) setTimeout(() => setShowData(workItem), 1000);
        }
    }, [selectedTab]);

    return (
        <>
            <Routes>
                <Route
                    path={showData}
                    element={<WorkOpen onClose={() => setShowData(null)} work={WorkDataList[showData]} />}
                />
            </Routes>
            <div id={page} className="main-view off">
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
                        {Object.keys(WorkDataList).map((key, index) => (
                            <WorkItem
                                key={index}
                                workItemClicked={name => setShowData(name)}
                                image={WorkDataList[key].image}
                                name={key}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}
