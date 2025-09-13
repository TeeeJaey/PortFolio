import React from "react";
import hereImg from "../../../images/here.jpg";
import dnImg from "../../../images/DN.jpg";
import jpmcImg from "../../../images/jpmc.png";

export const ExperienceDataList = [
    {
        id: "JPMC",
        title: "Software Engineer",
        company: (
            <span className="link" onClick={() => window.open("https://www.jpmorganchase.com/")}>
                JP Morgan Chase & Co.
            </span>
        ),
        image: jpmcImg,
        techstack: ["React", "Redux", "TypeScript", "Playwright", "NestJS", "Ag-grid"],
        time: (
            <>
                Since <br /> Apr 2024
            </>
        ),
        projects: [
            {
                project: (
                    <span className="link" onClick={() => window.open("https://jpmorgan.com/markets/execute")}>
                        Execute SPG
                    </span>
                ),
                content: [],
            },
        ],
    },
    {
        id: "HERE",
        title: "Software Engineer",
        company: (
            <span className="link" onClick={() => window.open("https://www.here.com/")}>
                HERE Technologies
            </span>
        ),
        image: hereImg,
        techstack: ["React", "Redux", "NestJS", "TypeScript", "NodeJS", "Angular", "ThreeJS"],
        time: (
            <>
                Jan 2022 <br />- Mar 2023
            </>
        ),
        projects: [
            {
                project: (
                    <span className="link" onClick={() => window.open("https://here.com/platform/hd-live-map")}>
                        HD Live Map Viewer
                    </span>
                ),
                content: [],
            },
            {
                project: (
                    <span className="link" onClick={() => window.open("https://wego.here.com")}>
                        Here We Go web
                    </span>
                ),
                content: [],
            },
        ],
    },
    {
        id: "DN",
        title: "Software Engineer",
        company: (
            <span className="link" onClick={() => window.open("https://www.dieboldnixdorf.com/")}>
                Diebold Nixdorf
            </span>
        ),
        image: dnImg,
        techstack: ["Angular", "React", "React-Native", "C#.Net", "SQL", "Python"],
        time: (
            <>
                Jul 2018 <br />- Dec 2021
            </>
        ),

        projects: [
            {
                project: (
                    <span
                        className="link"
                        onClick={() => window.open("https://dieboldnixdorf.com/retail/portfolio/software")}
                    >
                        Vynamic POS & Self-Checkout
                    </span>
                ),
                content: [],
            },
        ],
    },
];
