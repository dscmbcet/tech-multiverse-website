"use client"
import React, { useContext, useEffect, useState } from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import { useRouter, usePathname } from 'next/navigation';
// import Logo from '../../assets/images/ledebutlogo.png'
import './NavBar.css'
import menuIcon from './menu.svg';

function NavBar() {
    const router = useRouter();
    const pathname = usePathname();
    const [toggle, setToggle] = useState(false);

    const executeScroll = (link: string) => {
        if(pathname !== '/') {
            router.push('/');
        }
        // if (link === 'sponsor') {
        //     store.sponsorsRef?.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
        // }
        // else {
        //     store.speakersRef?.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
        // }
    }
    const changeToggle = () => {
        setToggle(!toggle);
    }
    return (
        <div id='navBar'>
            <div className="nav_wrapper">
                <div className='logoWrapper'>
                    {/* <h1>TECH MULTIVERSE</h1> */}
                    {/* <img alt='ledebut logo' src={Logo} /> */}
                </div>
                <ul className={`${toggle?'navLinks menu active':'navLinks'}`}>
                    <li>
                        <a href='/'>Home</a>
                    </li>
                    <li onKeyDown={()=>executeScroll("speaker")} onClick={()=>executeScroll("speaker")}>Speakers</li>
                    <li onKeyDown={()=>executeScroll("sponsor")} onClick={()=>executeScroll("sponsor")}>Sponsors</li>
                    {/* <li className={`${activeLink === 'register'&& "activelink"}`}>
                        <a href='/register'>Register</a>
                    </li> */}
                </ul>
                <img className='hamburgerMenu' src={menuIcon} onClick={changeToggle} onKeyDown={changeToggle} alt="" />
                <div role='none'
                    className={toggle ? 'backgroundOverlay' : 'backgroundOverlay backgroundOverlayClosed'}
                    onClick={() => {
                        setToggle(false);
                    }}
                    onKeyDown={() => {
                        setToggle(false);
                    }}
                />
            </div>
        </div>
    )
}

export default NavBar