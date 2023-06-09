"use client"
import About from './_components/About';
import SponsorCard from './_components/SponsorCard';
import Verticals from './_components/Verticals';
import styles from './page.module.css'
import { useEffect, useState } from 'react';

export default function Home() {
  const [width, setWindowWidth] = useState(1024)
  useEffect(() => { 
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => 
      window.removeEventListener('resize',updateDimensions);
   }, [])
   const updateDimensions = () => {
     const width = window.innerWidth
     setWindowWidth(width)
   }
  
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
}, []);
  return (
    <main className={styles.main}>
      {(width < 1024) && <div className={styles.mobileError}>
          <h1>THIS WEBSITE IS ONLY OPTIMISED ON DESKTOPS</h1>
      </div>}
    <section className={styles.landing}>
       <div className={styles.overlay} />
        <div className={styles.landing_wrapper}>
          <div className={styles.title_wrapper}>
            <div className={styles.title}>
              <p><b>tech </b>awaits your arival!</p>
              <p><b>multiverse</b></p>
              <h2>19th - 25th June ‘23</h2>
              <div 
              className="apply-button" 
              data-hackathon-slug="technoverse" 
              data-button-theme="dark"
              style={{height: "44px", width: "312px"}}
              />
            </div>
          </div>
          <div className={styles.mascot_wrapper}>
            <div className={styles.mascot}>
              <img src="/landing_sun.svg" alt="" />
              <img src="/landing_cloud.svg" alt="" />
              <img src="/landing_base.svg" alt="" />
              <img src="/landing_mascot.svg" alt="" />
            </div>
          </div>
        </div>


    <img className={styles.tree} src="/landing_tree.svg" alt={''}/>
    <img className={styles.plant1} src="/landing_plant1.svg" alt={''}/>
    <img className={styles.plant2} src="/landing_plant2.svg" alt={''}/>
  </section>
  <About/>
  <section className={styles.tracks}>
      <div className={styles.overlay} />
      <h1>choose from</h1>
      <h1>two tracks</h1>
      <div className={styles.tracks_image_container}>
        <div className={styles.tracks_image} />
        <div className={styles.tracks_image} />
      </div>
      <img className={styles.ship} src="/deco.svg" alt="" />
  </section>
  <Verticals/>
  <section className={styles.about}>
    <div className={styles.overlay} />
    <div className={styles.about_content}>
      <h1>TechnoVerse</h1>
      <h1>hackathon</h1>
      <h2>24th - 25th June‘23</h2>

      <p>Unleash your untapped potential and join the extraordinary gathering of visionary young minds. Step into the spotlight, unleash your creativity, and leave your mark as you embark on an exhilarating journey to revolutionize the world through technology.</p>
    <h2 className={styles.about_announce}>hackathon tracks will be announced soon !</h2>      
    </div>
    <img className={styles.brain} src="/brain.svg" alt="" />
  </section>

  <section className={styles.sponsors}>
    <div className={styles.wrapper}>
      <div className={styles.overlay} />
      <div className={styles.hflex}>
        <div>
          <h1>meet our</h1>
          <h1>sponsors</h1>
        </div>
        <img className={styles.treasurechest} src="/treasurechest.svg" alt="" />
      </div>
      <div className={styles.sponsorCategory}>
        <h2>platinum</h2>
        <div className={styles.sponsorContainer}>
          <SponsorCard imagePath='/devfolio.svg' URL='https://devfolio.co/discover' height='40px'/>
          <SponsorCard imagePath='/polygon.svg' URL='https://polygon.technology/' height='40px'/>
        </div>
        <h2>gold</h2>
        <div className={styles.sponsorContainer}>
          <SponsorCard imagePath='/solana.svg' URL='https://solana.com/' height='30px'/>
          <SponsorCard imagePath='/filecoin.svg' URL='https://filecoin.io/' height='30px'/>
          <SponsorCard imagePath='/replit.svg' URL='https://replit.com/' height='30px'/>
        </div>
      </div>
    </div>
  </section>
    </main>
  )
}
