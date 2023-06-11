import React from "react";
import "./about.css";

function About() {
  return (
    <div className="about-bg">
      <div className="about-pg">
      <div className="about-overlay" />
        <div className="about-pg-wrapper">
          <div className="about-title">
            <b className="about">about</b>
            <br />
            <b className="technoverse">TechnoVerse</b>
          </div>
          <div className="about-desc">
            <div>
              <p className="about-content">
                <b>Three tracks.</b> <br />
                <b>Three bootcamps.</b> <br />
                <b>And one hackathon.</b>{" "}
              </p>
              <div className="about-content-inner">
                <b>GDSC MBCET</b> presents <b>TechnoVerse</b> where Web, ML and
                Blockchain all come together to make the ultimate collaborative
                experience. Bootcamp spanning over 5 days & culminating in a <br/>24 hour
                hackathon, participants in each track can come together and{" "}
                <b>create cool stuff that matters</b>!{" "}
              </div>
            </div>
            <div className="player">
              <div id="wrap">
                <iframe
                  src="https://drive.google.com/file/d/1dEACB1Tv17PGOMIKuC4EwfGioX2nSeIf/preview"
                  width="560"
                  height="315"
                  allow="autoplay"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
