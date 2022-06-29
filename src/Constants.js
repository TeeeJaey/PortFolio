import MovieTrailersImg from "./images/MovieTrailers.png";
import BoardGamesImg from "./images/BoardGames.png";
import MernPosImg from "./images/MernPos.png";
import ChatBotImg from "./images/ChatBot.png";
import MyWayImg from "./images/MyWay.png";
import SendMyCellImg from "./images/SendMyCell.png";
import SignatureVerifierImg from "./images/SignatureVerifier.png";
import RaceItImg from "./images/RaceIt.png";
import MeditationImg from "./images/Meditation.png";
import SnakeLadderImg from "./images/SnakeLadder.png";

export const menuBarIndex = {
    Welcome: -1,
    About: 0,
    Experience: 1,
    Skills: 2,
    Education: 3,
    Work: 4,
    Interests: 5,
    Contact: 6,
};

export const menuBtns = ["About", "Experience", "Skills", "Education", "Work", "Interests", "Contact"];

export const WorkList = {
    MovieTrailers: {
        id: "MovieTrailers",
        image: MovieTrailersImg,
        title: "Movie Trailers",
        time: "Oct 2021",
        techstack: ["React-hooks", "Redux", "JavaScript", "HTML-CSS", "Lazy-Loading"],
        description: [
            "A Movie trailers application to watch trailers of different movies, each having genres, languages etc.",
            "Responsive enough to be viewed on any device. (desktop to mobile)",
        ],
        codeUrl: "https://github.com/TeeeJaey/Movie-Trailers-React",
        liveUrl: "https://teeejaey.github.io/csb-u4u39z/",
    },
    BoardGames: {
        id: "BoardGames",
        image: BoardGamesImg,
        title: "Board Games",
        time: "Aug 2020 - Ongoing",
        techstack: ["JavaScript", "Vue-JS", "HTML-CSS"],
        description: ["Set of Board games made in HTML / JavaScript", "Include games like Business, Wordle, Ludo, Tetris, 2048, etc."],
        codeUrl: "https://github.com/TeeeJaey/BoardGames",
        liveUrl: "https://teeejaey.github.io/Projects/BoardGames/BoardGames.html",
    },
    MernPos: {
        id: "MernPos",
        image: MernPosImg,
        title: "MernPos",
        time: "Jan 2021 - Mar 2021",
        techstack: ["NodeJS", "MongoDB", "ExpressJS", "React", "JavaScript", "HTML-CSS"],
        description: [
            "A Mern Stack Point of SALE application",
            "Enables user to signin to the app, add commodities, perform payment and complete transaction",
            "Also creates a pdf receipt in the end of each transaction",
        ],
        codeUrl: "https://github.com/TeeeJaey/MernPos",
    },
    ChatBot: {
        id: "ChatBot",
        image: ChatBotImg,
        title: "ChatBot",
        time: "Dec 2021",
        techstack: ["React", "TypeScript", "HTML-CSS"],
        description: [
            "A simple non-AI chatting assistant written in React",
            "Ask questions like - 'who r u?, 'who made u?', 'who is batman?' ,'i am hungry'",
            "Best viewed on a phone",
        ],
        codeUrl: "https://github.com/TeeeJaey/ChatBot",
        liveUrl: "https://teeejaey.github.io/csb-hjc9p/",
    },
    Meditation: {
        id: "Meditation",
        image: MeditationImg,
        title: "Meditation App",
        time: "Sep 2021",
        techstack: ["React-hooks", "Firebase-FireStore DB", "HTML-CSS"],
        description: [
            "A Meditation App where two users (trainer and seeker) can simultaneously undergo a meditation period",
            "There is no meditation in reality",
            "Seeker will request and trainer will accept and then the timer starts",
        ],
        codeUrl: "https://github.com/TeeeJaey/Meditation-App",
    },
    SendMyCell: {
        id: "SendMyCell",
        image: SendMyCellImg,
        title: "Send My Cell",
        time: "Jan 2019 - Feb 2019",
        techstack: ["PHP", "HTML-CSS", "JavaScript", "MySQL"],
        description: [
            "SendMyCell is a project on E-Commerce Website & database designing.",
            "It is an online store for mobiles",
            "There is a dashboard page, registration page, product page and also cart page",
        ],
        codeUrl: "https://github.com/TeeeJaey/SendMyCell",
    },
    SignatureVerifier: {
        id: "SignatureVerifierImg",
        image: SignatureVerifierImg,
        title: "Signature Verifier",
        time: "Jan 2019 - May 2019",
        techstack: ["Python", "OpenCV", "MySQL"],
        description: [
            "Handwritten Signature Verification & writer Identification using Image Processing",
            "It uses LBP to extract features and train the system",
            "It uses KNN to classify the test images",
        ],
        codeUrl: "https://github.com/TeeeJaey/SignatureVerifier",
    },
    RaceIt: {
        id: "RaceIt",
        image: RaceItImg,
        title: "Race It",
        time: "Jan 2017 - April 2017",
        techstack: ["Unity 3D", "C#"],
        description: ["A car racing game designed on Unity 3D engine", "Allows player to race with his/her car against few other cars"],
        codeUrl: "https://github.com/TeeeJaey/RaceIt-1.0",
    },
    SnakeLadder: {
        id: "SnakeLadder",
        image: SnakeLadderImg,
        title: "Snake & Ladder",
        time: "Oct 2018",
        techstack: ["Android", "Java"],
        description: ["Android app developed on Android studio", "Snakes and Ladders, a very famous board game form the 70s"],
        codeUrl: "https://github.com/TeeeJaey/Snakes-Ladder",
    },
    MyWayImg: {
        id: "MyWay",
        image: MyWayImg,
        title: "MyWay",
        time: "Feb 2018",
        techstack: ["HTML-CSS", "JavaScript"],
        description: ["Tried to copy a bootstrap tempelate that I found online."],
        codeUrl: "https://github.com/TeeeJaey/MYWAY",
        liveUrl: "https://teeejaey.github.io/Projects/MyWay/MYWAY.html",
    },
};
