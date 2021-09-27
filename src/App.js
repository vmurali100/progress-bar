import React from "react";
import { Nav } from "./Nav";
import { Progress } from "./Progress";
import "./style.css";

import ReactPlayer from 'react-player'
export default function App() {
  return (
    <div>
      <Nav />
      {/* <Progress /> */}
      <div className="videoWrapper">
      <ReactPlayer controls url="./003 Tutorial 3- Python Class And Objects.mp4" />

        </div>      
    </div>
  );
}
