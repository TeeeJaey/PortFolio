import React, { useState, useEffect } from "react";
import "./Work.css";
import { menuBarIndex } from "../Main";
import MovieTrailersImg from "../../images/MovieTrailers.png";
import BoardGamesImg from "../../images/BoardGames.png";
import MernPosImg from "../../images/MernPos.png";
import ChatBotImg from "../../images/ChatBot.png";
import MyWayImg from "../../images/MyWay.png";
import SendMyCellImg from "../../images/SendMyCell.png";
import SignatureVerifierImg from "../../images/SignatureVerifier.png";
import RaceItImg from "../../images/RaceIt.png";
import MeditationImg from "../../images/Meditation.png";
import SnakeLadderImg from "../../images/SnakeLadder.png";
import WorkItem from "./WorkItem";
import WorkData from "./WorkData";

export default function Work({ selectedTab }) {
    const [showData, setShowData] = useState(null);

    useEffect(() => {
        if (selectedTab !== menuBarIndex.Work) {
            document.getElementById("work").classList.add("off");
        } else {
            document.getElementById("work").classList.remove("off");
        }
    }, [selectedTab]);

    const WorkList = {
        MovieTrailers: MovieTrailersImg,
        BoardGames: BoardGamesImg,
        MernPos: MernPosImg,
        ChatBot: ChatBotImg,
        MyWayImg: MyWayImg,
        MeditationImg: MeditationImg,
        SendMyCellImg: SendMyCellImg,
        RaceItImg: RaceItImg,
        SignatureVerifierImg: SignatureVerifierImg,
        SnakeLadderImg: SnakeLadderImg,
    };

    return (
        <>
            {showData && <WorkData onClose={() => setShowData(null)} image={WorkList[showData]} name={showData} />}

            <div id="work" className="main-view off">
                <div className="header">Work</div>
                <div>
                    I have made some really cool <span className="highlight">personal projects</span>
                </div>
                <div className="work-list">
                    <ul>
                        {Object.keys(WorkList).map(key => {
                            return <WorkItem workItemClicked={name => setShowData(name)} image={WorkList[key]} name={key} />;
                        })}
                    </ul>
                </div>
            </div>
        </>
    );
}
