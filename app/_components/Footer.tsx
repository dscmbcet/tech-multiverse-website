"use client"
import React, { useContext, useEffect } from 'react'
import './Footer.css'
// eslint-disable-next-line import/no-extraneous-dependencies
import { AiFillInstagram, AiFillMail, AiOutlineTwitter, AiFillLinkedin } from 'react-icons/ai';

function Footer() {
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
    <div className='Footer' style={{backgroundColor: "#1A1A1A"}}>
        <div className='footer_register'>
            <div>
                <h1>
                register now and
                “do cool things that matter.”
                </h1>
            </div>
            <div>
                <div 
                className="apply-button" 
                data-hackathon-slug="YOUR-HACKATHON-SLUG" 
                data-button-theme="dark"
                style={{height: "44px", width: "312px"}}
                />
            </div>
        </div>
        <div className="footer_about">
            <h3>Google Developer Student Clubs, MBCET</h3>
            <p>Google Developer Student Clubs are university based community groups for students interested in Google developer technologies. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome.</p>
        </div>
        <div className='quickLinks'>
            <h3>Quick Links</h3>
            <a href="/">Home</a>
            <p>Speakers</p>
            {/* <a href="/register">Register</a> */}
            <a href="/">Website</a>
        </div>
        <div className='findUs'>
            <h3>Find Us</h3>
            <div className="iconWrapper">
                <a href="https://www.instagram.com/gdscmbcet/">
                    <AiFillInstagram style={{ marginRight: '10px' }} size={25} />
                </a>
                <a href="mailto:dscmbcet@gmail.com">
                    <AiFillMail style={{ marginRight: '10px' }} size={25} />
                </a>
                <a href="https://twitter.com/gdscmbcet">
                    <AiOutlineTwitter style={{ marginRight: '10px' }} size={25} />
                </a>
                <a href="https://www.linkedin.com/company/dsc-mbcet/">
                    <AiFillLinkedin style={{ marginRight: '10px' }} size={25} />
                </a>
            </div>
        </div>
    </div>
  )
}

export default Footer