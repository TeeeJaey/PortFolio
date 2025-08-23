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
        techstack: ["React", "Redux", "TypeScript", "Playwright", "Ag-grid"],
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
                content: [
                    <>
                        Contributed to the development and maintenance of Execute SPG, a mission-critical
                        <span className="highlight"> trading and bond bidding platform</span> used by institutional
                        clients.
                    </>,
                    <>
                        Built and optimized React (TS), Redux with Ag-grid front-end components to ensure
                        <span className="highlight"> real-time updates </span>of bond prices, bids, and execution
                        workflows.
                    </>,
                    <>Wrote detailed unit tests using Jest & React Testing Library</>,
                    <>
                        Designed and executed <span className="highlight"> automation test</span> suites in Playwright,
                        reducing manual testing effort and improving release reliability.
                    </>,
                    <>
                        Worked closely with the teams in various locations like USA and UK to collaborate and create
                        application
                    </>,
                ],
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
        techstack: ["Angular", "React", "Redux", "TypeScript", "NodeJS", "ThreeJS"],
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
                content: [
                    <>
                        Built and maintained a <span className="highlight">3D map visualization</span> platform using
                        Angular, Three.js, Node.js, and Selenium, enabling real-time rendering of high-definition road
                        and location data.
                    </>,
                    <>Wrote automation tests with Selenium, reducing regression issues.</>,
                ],
            },
            {
                project: (
                    <span className="link" onClick={() => window.open("https://wego.here.com")}>
                        Here We Go web
                    </span>
                ),
                content: [
                    <>
                        Contributed to HERE’s <span className="highlight">consumer navigation</span> web app, developing
                        and enhancing front-end features using React, TypeScript, and Redux
                    </>,
                    <>
                        Implemented state management and API integrations to deliver reliable routing, traffic, and
                        navigation data in real time.
                    </>,
                    <>
                        Collaborated with <span className="highlight">global teams</span> in Germany to roll out
                        features and UI improvements for millions of users.
                    </>,
                ],
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
        techstack: ["Angular", "C#.Net", "SQL", "Python"],
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
                content: [
                    <>
                        Contributed to the development of applications for
                        <span className="highlight"> large retail clients</span>, integrating Angular UI with C#.NET
                        backend services.
                    </>,
                    <>
                        Worked closely with <span className="highlight">international clients</span> to establish
                        requirement specifications and to solve critical software bugs
                    </>,
                    <>
                        Worked closely with the <span className="highlight">global core R/D teams</span> in Poland
                    </>,
                ],
            },
        ],
    },
];
