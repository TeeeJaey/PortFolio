import React, { useEffect } from "react";
import { menuBtns } from "./Constants";

export const useVisible = (selectedTab, menuIndex) => {
    const page = menuIndex > -1 ? menuBtns[menuIndex].toLowerCase() : "welcome";
    useEffect(() => {
        if (selectedTab !== menuIndex) {
            document.getElementById(page).classList.add("off");
        } else {
            document.getElementById(page).classList.remove("off");
        }
    }, [selectedTab, menuIndex]);

    return page;
};
