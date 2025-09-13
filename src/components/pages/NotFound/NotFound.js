import "./NotFound.css";
import { Link } from "react-router-dom";

export function NotFound({}) {
    return (
        <div id={"not-found"} className="main-view">
            <div className="header">404 - Page not found</div>
            <div className="content-container">
                <div className="content">
                    Oops! The page you are looking for does not exist. It might have been moved or deleted.
                </div>
                <div className="content">
                    You can go back to the{" "}
                    <Link to={"/"} className="link">
                        Home Page
                    </Link>{" "}
                    or explore other sections of the website.
                </div>
            </div>
        </div>
    );
}
