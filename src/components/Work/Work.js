import React, { useState, useEffect } from "react";
import "./Work.css";
import { menuBarIndex, WorkList } from "../../Constants";
import WorkItem from "./WorkItem";
import WorkData from "./WorkData";

export default function Work({ selectedTab, setSelectedTab }) {
    const [showData, setShowData] = useState(null);

    useEffect(() => {
        if (selectedTab !== menuBarIndex.Work) {
            document.getElementById("work").classList.add("off");
        } else {
            document.getElementById("work").classList.remove("off");
        }
    }, [selectedTab]);

    return (
        <>
            {showData && <WorkData onClose={() => setShowData(null)} data={WorkList[showData]} />}

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
                        {" "}
                        github{" "}
                    </span>
                    page for more
                </div>
                <div className="work-list">
                    <ul>
                        {Object.keys(WorkList).map((key, index) => {
                            return <WorkItem key={index} workItemClicked={name => setShowData(name)} image={WorkList[key].image} name={key} />;
                        })}
                    </ul>
                </div>
            </div>
        </>
    );
}
