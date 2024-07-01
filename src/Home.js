import React from "react";
import "./Home.css";
import Sidenav from "./navigation/Sidenav";
import Timeline from "./timeline/Timeline";

function Home() {
  return (
    <div className="homePage">
      <div className="homeNav">
        <Sidenav />
      </div>
      <div className="homeTimeLine">
        <Timeline />
      </div>
    </div>
  );
}

export default Home;
