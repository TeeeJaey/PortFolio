import React, { useEffect } from "react";

export const RedirectPage = ({ url }) => {
    useEffect(() => {
        window.location.replace(url);
    }, []);
    return null;
};
