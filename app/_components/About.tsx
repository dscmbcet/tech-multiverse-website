import React from "react";
import "./about.css";
import styles from "../page.module.css";

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
                experience. Spanning over 5 days & culminating in a 2 day
                hackathon, participants in each track can come together and{" "}
                <b>create cool stuff that matters</b>!{" "}
              </div>
            </div>
            <div className="player">
              <div id="wrap">
                {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/wCmt2Oa9Olk" title="promo" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen/> */}
                <iframe
                  src="https://drive.google.com/file/d/1dEACB1Tv17PGOMIKuC4EwfGioX2nSeIf/preview"
                  width="560"
                  height="315"
                  allow="autoplay"
                ></iframe>
                {/* <iframe title="promo" src="https://drive.google.com/file/d/1f8jPcM92jHkDUjmy0Ta0GpkikBcFKki3/preview" width="440" height="280" allow="autoplay" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
