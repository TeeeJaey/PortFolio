import React, { useEffect } from "react";
import "./Submarine.css";

export default function Submarine() {
    useEffect(() => {
        const seaAnimated = document.getElementsByClassName("sea-animated");
        if (seaAnimated) seaAnimated[0].classList.remove("sea-animated");
    }, []);

    return (
        <>
            <div class="sea sea-animated">
                <div class="circle-wrapper">
                    <div class="bubble"></div>
                    <div class="bubble"></div>
                    <div class="submarine-wrapper">
                        <div class="submarine-body">
                            <div class="window"></div>
                            <div class="engine"></div>
                            <div class="light"></div>
                        </div>
                        <div class="helix"></div>
                        <div class="hat">
                            <div class="leds-wrapper">
                                <div class="periscope"></div>
                                <div class="leds"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
