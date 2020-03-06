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
                <h1>Nicholas Gonzalez</h1>
                <p>Software Developer</p>
            </div>
            <div className='button-section'>
                <button className="contact-btn"><h1>Get In Touch</h1></button>
            </div>
        </div>
    </div>
    )
};