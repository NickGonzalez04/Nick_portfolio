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
                    <a href="#contact">
                <button type="submit" className="contact-btn">Get In Touch</button>
            </a>       
            </div>
        </div>
    </div>

    )
};