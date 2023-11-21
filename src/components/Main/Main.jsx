import React from "react";
import "./main.css";

const Main = () => {
  return (
    <div className="profile">
      <div className="profileRight">
        <div className="profileRightTop">
          <div className="profileCover">
            <img className="profileCoverImg" src="assets/bridgr.jpeg" alt="" />
            <img className="profileUserImg" src="assets/profile.jpeg" alt="" />
          </div>
          <div className="profileInfo">
            <h4 className="profileInfoName">Nitesh Kumar &nbsp;</h4>
            {/* <img className="profileIcon" src="./assets/premium.png" alt="" /> */}
            <img className="profileIcon" src="./assets/verified.png" alt="" />
          </div>

          <div className="profileFollow">
            <div className="profileFollowers">
              <span className="box1">6482</span>
              <p className="follow1">Followers</p>
            </div>
            <div className="profileFollowing">
              <span className="box2">245</span>
              <p className="follow2">Following</p>
            </div>
          </div>

          <div className="profileAbout">
            <p>Co-founder & CEO at Terribly Tiny Tales </p>
            <a
              href="https://www.instagram.com/nitesh.mali_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.instagram.com/nitesh.mali_/
            </a>
          </div>

          <div className="reacts">
            <img className="reactsIcon" src="./assets/star.png" alt="" />
            <span className="reactsText">125</span>

            <img className="reactsIcon" src="./assets/like.png" alt="" />
            <span className="reactsText">12</span>

            <img className="reactsIcon" src="./assets/eye.png" alt="" />
            <span className="reactsText">57.8K</span>

            <img className="reactsIcon" src="./assets/heart.png" alt="" />
            <span className="reactsText">26.0K</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
