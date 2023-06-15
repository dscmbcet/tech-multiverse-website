"use client"
import React, { useState } from 'react'
import { useRouter, usePathname } from 'next/navigation';
import './NavBar.css'
import a from 'next/link';

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
                    
                    <img alt='technoverse logo' src={"/logo.svg"} />
                </div>
                <ul className={`${toggle?'navLinks menu active':'navLinks'}`}>
                    <li>
                        <a className='link' href='/' >Home</a>
                    </li>
                    <li>
                        <a className='link' href='#sponsors' >Sponsors</a>
                    </li>
                    <li>
                        <a className='link' href='#register' >Register</a>
                    </li>
                    {/* <li onKeyDown={()=>executeScroll("register")} onClick={()=>executeScroll("register")}>Register</li>
                    <li onKeyDown={()=>executeScroll("sponsor")} onClick={()=>executeScroll("sponsor")}>Sponsors</li> */}
                    {/* <li className={`${activeLink === 'register'&& "activelink"}`}>
                        <a href='/register'>Register</a>
                    </li> */}
                </ul>
                <img className='hamburgerMenu' src="/menu.svg" onClick={changeToggle} onKeyDown={changeToggle} alt="" />
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