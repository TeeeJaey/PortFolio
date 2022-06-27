import React, { useEffect } from "react";
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

export default function Work({ selectedTab }) {
    useEffect(() => {
        if (selectedTab !== menuBarIndex.Work) {
            document.getElementById("work").classList.add("off");
        } else {
            document.getElementById("work").classList.remove("off");
        }
    }, [selectedTab]);

    return (
        <>
            <div id="work" className="main-view off">
                <div className="header">Work</div>
                <div>
                    I have worked on some really cool <span className="highlight">personal projects </span>.
                </div>
                <div class="work-list">
                    <ul>
                        <WorkItem image={MovieTrailersImg} />
                        <WorkItem image={BoardGamesImg} />
                        <WorkItem image={MernPosImg} />
                        <WorkItem image={ChatBotImg} />
                        <WorkItem image={MyWayImg} />
                        <WorkItem image={MeditationImg} />
                        <WorkItem image={SendMyCellImg} />
                        <WorkItem image={RaceItImg} />
                        <WorkItem image={SignatureVerifierImg} />
                        <WorkItem image={SnakeLadderImg} />
                    </ul>
                </div>
            </div>
        </>
    );
}
