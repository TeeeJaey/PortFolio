import React, { useEffect } from "react";
import "./Submarine.css";

export function Submarine() {
    useEffect(() => {
        const seaAnimated = document.getElementsByClassName("sea-animated");
        if (seaAnimated?.[0]) seaAnimated[0]?.classList.remove("sea-animated");
    }, []);

    return (
        <>
            <div className="sea sea-animated">
                <div className="circle-wrapper">
                    <div className="bubble"></div>
                    <div className="bubble"></div>
                    <div className="submarine-wrapper">
                        <div className="submarine-body">
                            <div className="window"></div>
                            <div className="engine"></div>
                            <div className="light-source"></div>
                            <div className="light"></div>
                        </div>
                        <div className="helix"></div>
                        <div className="hat">
                            <div className="leds-wrapper">
                                <div className="periscope"></div>
                                <div className="leds"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
