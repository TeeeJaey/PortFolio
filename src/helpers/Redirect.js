import { useEffect } from "react";

export const RedirectPage = ({ url }) => {
    useEffect(() => {
        window.location.replace(url);
    }, [url]);
    return null;
};
