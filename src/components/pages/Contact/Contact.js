import React from "react";
import "./Contact.css";
import { FaEnvelope, FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";
import { useVisible, menuBarIndex } from "../../../helpers";

export function Contact({ selectedTab }) {
    const page = useVisible(selectedTab, menuBarIndex.Contact);

    return (
        <>
            <div id={page} cclassName="main-view off">
                <div className="header">Contact</div>
                <div className="content">
                    Have a question?
                    <br />
                    <div className="contact-caption">Don't hesitate to Email me...</div>
                </div>
                <div className="contact-container d-flex-col">
                    <div className="d-flex">
                        <div className="contact-label">E-mail :</div>
                        <div className="contact-icon">
                            <FaEnvelope />
                        </div>
                        <div className="contact-value">
                            <span className="link" onClick={() => window.location.assign("mailto:tjadhav95@gmail.com")}>
                                tjadhav95@gmail.com
                            </span>{" "}
                            /{" "}
                            <span
                                className="link"
                                style={{ cursor: "pointer" }}
                                onClick={() => window.location.assign("mailto:can.tejasj@gmail.com")}
                            >
                                can.tejasj@gmail.com
                            </span>
                        </div>
                    </div>

                    <div className="d-flex">
                        <div className="contact-label">LinkedIn :</div>
                        <div className="contact-icon">
                            <FaLinkedin />
                        </div>
                        <div className="contact-value">
                            <span
                                className="link"
                                onClick={() => window.open("https://www.linkedin.com/in/tejas-jadhav-765043110/")}
                            >
                                tejas-jadhav-765043110
                            </span>
                        </div>
                    </div>

                    <div className="d-flex">
                        <div className="contact-label">Facebook :</div>
                        <div className="contact-icon">
                            <FaFacebook />
                        </div>
                        <div className="contact-value">
                            <span
                                className="link"
                                onClick={() => window.open("https://www.facebook.com/tejasjadhav95/")}
                            >
                                tejasjadhav95
                            </span>
                        </div>
                    </div>

                    <div className="d-flex">
                        <div className="contact-label">GitHub :</div>
                        <div className="contact-icon">
                            <FaGithub />
                        </div>
                        <div className="contact-value">
                            <span className="link" onClick={() => window.open("https://github.com/TeeeJaey")}>
                                TeeeJaey
                            </span>{" "}
                            /{" "}
                            <span className="link" onClick={() => window.open("https://gist.github.com/TeeeJaey")}>
                                TeeeJaey-gists
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
