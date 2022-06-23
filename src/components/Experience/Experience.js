import React, { useEffect } from "react";
import "./Experience.css";
import { menuBarIndex } from "../Main";
import hereImg from "../../images/here.jpg";
import dnImg from "../../images/DN.jpg";

export default function Experience({ selectedTab }) {
    useEffect(() => {
        if (selectedTab !== menuBarIndex.Experience) {
            document.getElementById("experience").classList.add("off");
        } else {
            document.getElementById("experience").classList.remove("off");
        }
    }, [selectedTab]);

    function getTotalExperience() {
        const dateFrom = new Date("2018-07-18");
        const dateTo = new Date();
        const months = dateTo.getMonth() - dateFrom.getMonth() + 12 * (dateTo.getFullYear() - dateFrom.getFullYear());
        return "" + Math.floor(months / 12) + " years, " + (months % 12) + " months";
    }

    return (
        <>
            <div id="experience" className="main-view off">
                <div className="header">Experience</div>
                <div className="total-exp">{getTotalExperience()}</div>

                <div className="content-container">
                    <div className="d-flex exp-item">
                        <div className="exp-span">Jan 2022 - Till Now</div>
                        <div className="exp-value">
                            <div className="exp-title">FrontEnd Developer</div>
                            <div className="exp-company">
                                <span className="link" onClick={() => window.open("https://www.here.com/")}>
                                    Here Tech
                                </span>
                            </div>
                            <div className="exp-techstack">
                                <span className="techstack-item">Angular</span>
                                <span className="techstack-item">React</span>
                                <span className="techstack-item">TypeScript</span>
                            </div>
                            <ul className="exp-content">
                                <li>
                                    Working on design & development{" "}
                                    <span className="link" onClick={() => window.open("https://www.here.com/platform/HD-live-map")}>
                                        HD Live Map
                                    </span>
                                </li>
                            </ul>
                            <div className="exp-image-mobile">
                                <img src={hereImg} />
                            </div>
                        </div>
                        <div className="exp-image">
                            <img src={hereImg} />
                        </div>
                    </div>
                    <div className="d-flex exp-item">
                        <div className="exp-span">July 2018 - Dec 2021</div>
                        <div className="exp-value">
                            <div className="exp-title">FullStack Developer</div>
                            <div className="exp-company">
                                <span className="link" onClick={() => window.open("https://www.dieboldnixdorf.com/")}>
                                    Diebold Nixdorf
                                </span>
                            </div>
                            <div className="exp-techstack">
                                <span className="techstack-item">C#.Net</span>
                                <span className="techstack-item">Angular</span>
                                <span className="techstack-item">SQL</span>
                                <span className="techstack-item">NodeJS</span>
                            </div>
                            <ul className="exp-content">
                                <li>
                                    Worked on design & development{" "}
                                    <span
                                        className="link"
                                        onClick={() => window.open("https://www.dieboldnixdorf.com/en-us/retail/portfolio/systems/pos-systems/")}
                                    >
                                        Retail POS Systems
                                    </span>{" "}
                                    and{" "}
                                    <span
                                        className="link"
                                        onClick={() =>
                                            window.open("https://www.dieboldnixdorf.com/en-us/retail/portfolio/systems/self-service-overview/")
                                        }
                                    >
                                        Retail Self-Service Systems
                                    </span>
                                </li>
                            </ul>
                            <div className="exp-image-mobile">
                                <img src={dnImg} />
                            </div>
                        </div>
                        <div className="exp-image">
                            <img src={dnImg} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
