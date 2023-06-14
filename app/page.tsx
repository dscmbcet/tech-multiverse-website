"use client";
import { gsap } from "gsap";
import About from "./_components/About";
import SponsorCard from "./_components/SponsorCard";
import Verticals from "./_components/Verticals";
import styles from "./page.module.css";
import { useEffect, useState, useRef, useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Home() {
  let ctx = gsap.context(() => {});
  const mascotRef = useRef(null);
  const mascotBaseRef = useRef(null);
  const plant1Ref = useRef(null);
  const plant2Ref = useRef(null);

  const mascotParentRef = useRef(null);
  var mascottl = gsap.timeline({ paused: true });
  gsap.registerPlugin(ScrollTrigger);

  const [width, setWindowWidth] = useState(1024);

  useLayoutEffect(() => {
    ctx.add(() => {
      ScrollTrigger.create({
        trigger: mascotRef.current,
        start: "top bottom",
        onEnter: () => mascottl.play(),
        onLeave: () => mascottl.pause(),
        onEnterBack: () => mascottl.play(),
        onLeaveBack: () => mascottl.pause(),
      });
      mascottl.to(mascotRef.current, { rotation: 4, y: -20, duration: 1 });
      mascottl.to(mascotBaseRef.current, { y: -100, duration: 1 }, "-=1");
      mascottl.to(plant1Ref.current, { rotation: 3, duration: 1 }, "-=1");
      mascottl.to(plant2Ref.current, { rotation: 3, duration: 1 }, "-=1");
      mascottl.to(plant1Ref.current, {
        rotation: -3,
        yoyoEase: true,
        duration: 2,
        repeat: -1,
        yoyo: true,
      });
      mascottl.to(
        plant2Ref.current,
        { rotation: -3, yoyoEase: true, duration: 2, repeat: -1, yoyo: true },
        "-=2"
      );
      mascottl.to(
        mascotRef.current,
        {
          rotation: -4,
          y: 20,
          yoyoEase: true,
          duration: 2,
          repeat: -1,
          yoyo: true,
        },
        "-=2"
      );
      mascottl.to(
        mascotBaseRef.current,
        { y: -50, yoyoEase: true, duration: 2, repeat: -1, yoyo: true },
        "-=2"
      );
    }, mascotParentRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);
  return (
    <main className={styles.main}>
      {/* {(width < 1024) && <div className={styles.mobileError}>
          <h1>THIS WEBSITE IS OPTIMIZED ONLY ON DESKTOPS</h1>
      </div>} */}
      <section className={styles.landing}>
        <div className={styles.overlay}>
          <div className={styles.imageoverlay}/>
        </div>
        <div className={styles.landing_wrapper}>
          <div className={styles.title_wrapper}>
            <div className={styles.title}>
              <p>
                <b>tech </b>awaits your arrival!
              </p>
              <p>
                <b>multiverse</b>
              </p>
              <h2>19th - 25th June ‘23</h2>
              <div
                className="apply-button"
                data-hackathon-slug="technoverse"
                data-button-theme="dark"
                style={{ height: "44px", width: "312px" }}
              />
            </div>
          </div>
          <div className={styles.mascot_wrapper}>
            <div className={styles.mascot} ref={mascotParentRef}>
              <img src="/landing_sun.svg" alt="" />
              <img src="/landing_cloud.svg" alt="" />
              <img src="/landing_base.svg" ref={mascotBaseRef} alt="" />
              <img src="/landing_mascot.svg" ref={mascotRef} alt="" />
            </div>
          </div>
        </div>
        {width > 1024 && (
          <img className={styles.tree} src="/landing_tree.svg" alt={""} />
        )}
        <img
          className={styles.plant1}
          ref={plant1Ref}
          src="/landing_plant1.svg"
          alt={""}
        />
        <img
          className={styles.plant2}
          ref={plant2Ref}
          src="/landing_plant2.svg"
          alt={""}
        />
      </section>
      <About />
      <section className={styles.tracks}>
        <div className={styles.bg} />
        <div className={styles.overlay}>
            <div className={styles.imageoverlay}/>
        </div>
        <h1>choose from</h1>
        <h1>two tracks</h1>
        <div className={styles.tracks_image_container}>
          <div className={styles.coin}>
            <div
              className={`${styles.coin__face} ${styles.coin1__face__front}`}
            />
            <div
              className={`${styles.coin__face} ${styles.coin1__face__back}`}
            />
          </div>

          <div className={styles.coin}>
            <div
              className={`${styles.coin__face} ${styles.coin2__face__front}`}
            />
            <div
              className={`${styles.coin__face} ${styles.coin2__face__back}`}
            />
          </div>
        </div>
        <img className={styles.ship} src="/deco.svg" alt="" />
      </section>
      <Verticals />
      <section className={styles.about}>
      <div className={styles.overlay}>
            <div className={styles.imageoverlay}/>
          </div>
        <div className={styles.about_content}>
          <h1>TechnoVerse</h1>
          <h1>hackathon</h1>
          <h2>24th - 25th June‘23</h2>

          <p>
          Presenting to you all, our <b>24 hour hackathon</b> being conducted as part of TechnoVerse.
Whether you&lsquo;re a seasoned hacker or a newcomer, this hackathon is designed to <b>ignite your passion for technology</b> and empower you to create solutions that can make a real impact.
          </p>
          <p>
            <b>Team Size</b> : <b>min. 2 - max. 5</b> per team
          </p>
          <h2 className={styles.about_announce}>
            hackathon tracks will be <br /> announced soon !
          </h2>
        </div>
        {width > 1024 && (
          <div className={styles.brainIllustration}>
            <img className={styles.brain} src="/brain.svg" alt="" />
            <img className={styles.bulb} src="/bulb.svg" alt="" />
          </div>
        )}

      </section>

      <section id="sponsors" className={styles.sponsors}>
        <div className={styles.wrapper}>
          <div className={styles.overlay}>
            <div className={styles.imageoverlay}/>
          </div>
          <div className={styles.bg} />
          <div className={styles.hflex}>
            <div>
              <h1>meet our</h1>
              <h1>sponsors</h1>
            </div>
            <img
              className={styles.treasurechest}
              src="/treasurechest.svg"
              alt=""
            />
          </div>
          <div className={styles.sponsorCategory}>
            <h2>title sponsor</h2>
              <div className={styles.sponsorContainer}>
                <SponsorCard
                  imagePath="/betser-life.png"
                  URL="https://www.betserlife.com/"
                  alt="BETSERLIFE LOGO"
                />
            </div>
            <h2>platinum</h2>
            <div className={styles.sponsorContainer}>
              <SponsorCard
                imagePath="/devfolio.svg"
                URL="https://devfolio.co/"
                alt="DEVFOLIO LOGO"
              />
              <SponsorCard
                imagePath="/polygon.svg"
                URL="https://polygon.technology/"
                alt="POLYGON LOGO"
              />
            </div>
            <h2>gold</h2>
            <div className={styles.sponsorContainer}>
              <SponsorCard
                imagePath="/solana.svg"
                URL="https://solana.com/"
                alt="SOLANA LOGO"
              />
              <SponsorCard
                imagePath="/filecoin.svg"
                URL="https://filecoin.io/"
                alt="FILECOIN LOGO"
              />
              <SponsorCard
                imagePath="/replit.svg"
                URL="https://replit.com/"
                alt="REPLIT LOGO"
              />
            </div>
            <h2>silver</h2>
            <div className={styles.sponsorContainer}>
              <SponsorCard
                imagePath="/taskade.png"
                URL="https://www.taskade.com/"
                alt="TASKADE LOGO"
              />
              <SponsorCard
                imagePath="/voiceflow.png"
                URL="https://www.voiceflow.com/"
                alt="VOICEFLOW LOGO"
              />
              <SponsorCard
                imagePath="/axure.svg"
                URL="https://www.axure.com/"
                alt="AXURE LOGO"
              />
              <SponsorCard
                imagePath="/oreilly.png"
                URL="https://www.oreilly.com/"
                alt="OREILLY LOGO"
              />
              <SponsorCard
                imagePath="/givemycertificate.png"
                URL="https://givemycertificate.com/"
                alt="GIVEMYCERTIFICATE LOGO"
              />
            </div>
            <h2>educational partner</h2>
            <div className={styles.sponsorContainer}>
              <SponsorCard
                imagePath="/interview-cake.png"
                URL="https://www.interviewcake.com/"
                alt="INTERVIEWCAKE LOGO"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
