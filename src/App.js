import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Header/Navigation";
import Films from "./components/Film/Films";
import Login from "./page/Auth/Login/Login";

import { useEffect } from "react";

function App() {

  useEffect(() => {
    // Check if the YouTube Player API is loaded
    if (typeof window.YT !== "undefined") {
      // Create a new player object
      const player = new window.YT.Player("player", {
        width: "100%",
        height: "822",
        videoId: "3F_feNb4oYQ",
        playerVars: {
          modestbranding: 1 // Hide the title of the video
        },
        events: {
          onReady: onPlayerReady,
        },
      });
    }
  }, []);

  function onPlayerReady(event) {
    event.target.playVideo();
  }

  return (
    <>
      <div className="Film-Container">
        <div id="player"></div>
        <div className="banner_bottom_cover"></div>
      </div>
      <header className="header">
        <Navigation />
      </header>
      <main className="body">
        <Films />
      </main>
      {/* <Login/> */}
      <div className="concord-img-gradient"></div>
    </>
  );
}

export default App;
