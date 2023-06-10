import React from 'react'
import './about.css';

function About() {
  return (
    <div className='about-bg'>
    <div className='about-pg'>
        <div className='about-title'>
       <b className='about'>about</b>
       <br/>
       <b className='technoverse'>TechnoVerse</b>
       </div>
       <div className='about-desc'>
        <div>
       <p className='about-content'>
       
        <p>Three tracks. <br/>
        Three bootcamps. <br/>
        And one hackathon. </p>
       </p>
       <div className='about-content-inner'><b>GDSC MBCET</b> presents <b>TechnoVerse</b> where Web, ML and Blockchain all come together to make the ultimate collaborative experience. Spanning over 5 days & culminating in a 2 day hackathon, participants in each track can come together and <b>create cool stuff that matters</b>! </div>
       </div>
       <p className='promo-vid'>promo here</p>
       </div>
    </div>
    </div>
  )
}

export default About
