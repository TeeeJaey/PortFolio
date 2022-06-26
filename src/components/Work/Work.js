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

                <div className="content-container">
                    <div className="work-list d-flex">
                        <div class="work-item">
                            <img src={MovieTrailersImg} />
                        </div>
                        <div class="work-item">
                            <img src={BoardGamesImg} />
                        </div>
                        <div class="work-item">
                            <img src={MernPosImg} />
                        </div>
                        <div class="work-item">
                            <img src={ChatBotImg} />
                        </div>
                        <div class="work-item">
                            <img src={SendMyCellImg} />
                        </div>
                        <div class="work-item">
                            <img src={SignatureVerifierImg} />
                        </div>
                        <div class="work-item">
                            <img src={RaceItImg} />
                        </div>
                        <div class="work-item">
                            <img src={MyWayImg} />
                        </div>
                        <div class="work-item">
                            <img src={MeditationImg} />
                        </div>
                        <div class="work-item">
                            <img src={SnakeLadderImg} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
