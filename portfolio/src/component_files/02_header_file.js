import React from 'react';
import '../style_files/02_header.scss';

// Components 
import Nav from './01_nav_bar.js'

export default function Header(){


return(
        <div className='header'>
        <Nav />
        <div className="section">
            <div className="heading-section">
                <h1>Hi, I'm Nicholas,
                    <br></br> Software Engineer living in South Florida ☀️ 🌴 </h1>          
            </div>
            <div className='button-section'>
            <a href="#contact">
                <button type="submit" className="contact-btn"><h1>Get In Touch</h1></button>
            </a>
            </div>
        </div>
    </div>

    )
};