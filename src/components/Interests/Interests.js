import React, { useEffect } from "react";
import "./Interests.css";
import { menuBarIndex } from "../../Constants";

export default function Interests({ selectedTab }) {
  useEffect(() => {
    if (selectedTab !== menuBarIndex.Interests) {
      document.getElementById("interests").classList.add("off");
    } else {
      document.getElementById("interests").classList.remove("off");
    }
  }, [selectedTab]);

  return (
    <>
      <div id="interests" className="main-view off">
        <div className="header">Interests</div>

        <div className="content-container">COMING SOON</div>
      </div>
    </>
  );
}
