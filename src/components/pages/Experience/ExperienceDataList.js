import React from "react";
import hereImg from "../../../images/here.jpg";
import dnImg from "../../../images/DN.jpg";
import jpmcImg from "../../../images/jpmc.png";

export const ExperienceDataList = [
    {
        id: "JPMorganChase",
        title: "FrontEnd Developer",
        company: (
            <span className="link" onClick={() => window.open("https://www.jpmorganchase.com/")}>
                JP Morgan Chase & Co.
            </span>
        ),
        image: jpmcImg,
        techstack: ["React", "Redux", "TypeScript"],
        time: (
            <>
                Since <br /> Apr 2024
            </>
        ),
        content: [<>Working on design & development of JPMC SPG application</>],
    },
    {
        id: "HereTech",
        title: "FrontEnd Developer",
        company: (
            <span className="link" onClick={() => window.open("https://www.here.com/")}>
                Here Tech
            </span>
        ),
        image: hereImg,
        techstack: ["Angular", "React", "Redux", "TypeScript"],
        time: (
            <>
                Jan 2022 <br />- Mar 2023
            </>
        ),
        content: [
            <>
                Working on design & development of
                <span className="link" onClick={() => window.open("https://www.here.com/platform/HD-live-map")}>
                    {" HD Live Map Viewer "}
                </span>
                and
                <span className="link" onClick={() => window.open("https://wego.here.com/")}>
                    {" Here WEGO Web "}
                </span>
            </>,
        ],
    },
    {
        id: "DN",
        title: "FullStack Developer",
        company: (
            <span className="link" onClick={() => window.open("https://www.dieboldnixdorf.com/")}>
                Diebold Nixdorf
            </span>
        ),
        image: dnImg,
        techstack: ["C#.Net", "Angular", "SQL", "NodeJS"],
        time: (
            <>
                Jul 2018 <br />- Dec 2021
            </>
        ),
        content: [
            <>
                Worked on design & development{" "}
                <span
                    className="link"
                    onClick={() =>
                        window.open("https://www.dieboldnixdorf.com/en-us/retail/portfolio/systems/pos-systems/")
                    }
                >
                    {" Retail POS Systems "}
                </span>
                and
                <span
                    className="link"
                    onClick={() =>
                        window.open(
                            "https://www.dieboldnixdorf.com/en-us/retail/portfolio/systems/self-service-overview/",
                        )
                    }
                >
                    {" Retail Self-Service Systems "}
                </span>
            </>,
        ],
    },
];
