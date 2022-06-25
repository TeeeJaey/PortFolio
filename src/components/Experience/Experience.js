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
                    <div className="d-flex work-item">
                        <div className="work-span">
                            Jan 2022 <br />- Till Now
                        </div>
                        <div className="work-value">
                            <div className="work-title">FrontEnd Developer</div>
                            <div className="work-company">
                                <span className="link" onClick={() => window.open("https://www.here.com/")}>
                                    Here Tech
                                </span>
                            </div>
                            <div className="work-techstack">
                                <span className="techstack-item">Angular</span>
                                <span className="techstack-item">React</span>
                                <span className="techstack-item">TypeScript</span>
                            </div>
                            <ul className="work-content">
                                <li>
                                    Working on design & development{" "}
                                    <span className="link" onClick={() => window.open("https://www.here.com/platform/HD-live-map")}>
                                        HD Live Map
                                    </span>
                                </li>
                            </ul>
                            <div className="work-image-mobile">
                                <img src={hereImg} />
                            </div>
                        </div>
                        <div className="work-image">
                            <img src={hereImg} />
                        </div>
                    </div>
                    <div className="d-flex work-item">
                        <div className="work-span">Jul 2018 - Dec 2021</div>
                        <div className="work-value">
                            <div className="work-title">FullStack Developer</div>
                            <div className="work-company">
                                <span className="link" onClick={() => window.open("https://www.dieboldnixdorf.com/")}>
                                    Diebold Nixdorf
                                </span>
                            </div>
                            <div className="work-techstack">
                                <span className="techstack-item">C#.Net</span>
                                <span className="techstack-item">Angular</span>
                                <span className="techstack-item">SQL</span>
                                <span className="techstack-item">NodeJS</span>
                            </div>
                            <ul className="work-content">
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
                            <div className="work-image-mobile">
                                <img src={dnImg} />
                            </div>
                        </div>
                        <div className="work-image">
                            <img src={dnImg} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
