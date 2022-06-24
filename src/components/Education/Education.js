import React, { useEffect } from "react";
import "./Education.css";
import { menuBarIndex } from "../Main";
import mtechImg from "../../images/mtechTransparent.png";
import btechImg from "../../images/btechTransparent.png";

export default function Education({ selectedTab }) {
    useEffect(() => {
        if (selectedTab !== menuBarIndex.Education) {
            document.getElementById("education").classList.add("off");
        } else {
            document.getElementById("education").classList.remove("off");
        }
    }, [selectedTab]);

    return (
        <>
            <div id="education" className="main-view off">
                <div className="header">Education</div>

                <div className="content-container">
                    <div className="d-flex work-item">
                        <div className="work-span">
                            Jun 2017 <br />- May 2019
                        </div>
                        <div className="work-value">
                            <div className="work-title">Master of Technology - Computer Engineering</div>
                            <div className="work-company">
                                <span className="link" onClick={() => window.open("https://engineering.nmims.edu/")}>
                                    Narsee Monjee Institute of Management Studies
                                </span>
                            </div>
                            <ul className="work-content">
                                <li>
                                    Passed out with a CGPA of <span class="highlight">3.32</span>
                                </li>
                                <li>
                                    Wrote & Published a Technical Research paper on{" "}
                                    <span className="link" onClick={() => window.open("https://www.irjet.net/archives/V6/i4/IRJET-V6I4130.pdf")}>
                                        Handwritten Signature Verification
                                    </span>
                                </li>
                            </ul>
                            <div className="work-image-mobile">
                                <img src={mtechImg} />
                            </div>
                        </div>
                        <div className="work-image">
                            <img src={mtechImg} />
                        </div>
                    </div>
                    <div className="d-flex work-item">
                        <div className="work-span">
                            July 2018 <br />- Dec 2021
                        </div>
                        <div className="work-value">
                            <div className="work-title">Bachelor of Technology - Computer Engineering</div>
                            <div className="work-company">
                                <span className="link" onClick={() => window.open("https://engineering.nmims.edu/")}>
                                    Narsee Monjee Institute of Management Studies
                                </span>
                            </div>
                            <ul className="work-content">
                                <li>
                                    Passed out with a CGPA of <span class="highlight">2.70</span>
                                </li>
                            </ul>
                            <div className="work-image-mobile">
                                <img src={btechImg} />
                            </div>
                        </div>
                        <div className="work-image">
                            <img src={btechImg} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
