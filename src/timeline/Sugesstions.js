import React from "react";
import "./Sugesstions.css";
import { Avatar } from "@mui/material";

function Sugesstions() {
  return (
    <div className="suggestions">
      <div className="suggstions-header">Suggestions for you </div>
      <div className="suggestions-usernames">
        <div className="suggestion-username">
          <div className="username-left">
            <span className="avatar">
              <Avatar>S</Avatar>
            </span>
            <div className="username-info">
              <span className="username">m.shebutton</span>
              <span className="relation">New to instagram</span>
            </div>
          </div>
          <button className="follow-button">follow</button>
        </div>

        <div className="suggestion-username">
          <div className="username-left">
            <span className="avatar">
              <Avatar>R</Avatar>
            </span>
            <div className="username-info">
              <span className="username">sheban</span>
              <span className="relation">New to instagram</span>
            </div>
          </div>
          <button className="follow-button">follow</button>
        </div>

        <div className="suggestion-username">
          <div className="username-left">
            <span className="avatar">
              <Avatar>R</Avatar>
            </span>
            <div className="username-info">
              <span className="username">shebqan</span>
              <span className="relation">New to instagram</span>
            </div>
          </div>
          <button className="follow-button">follow</button>
        </div>

        <div className="suggestion-username">
          <div className="username-left">
            <span className="avatar">
              <Avatar>R</Avatar>
            </span>
            <div className="username-info">
              <span className="username">shebqan</span>
              <span className="relation">New to instagram</span>
            </div>
          </div>
          <button className="follow-button">follow</button>
        </div>
      </div>
    </div>
  );
}

export default Sugesstions;
