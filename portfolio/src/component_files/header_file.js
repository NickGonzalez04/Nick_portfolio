import React from 'react';
import './header.scss';

// Components 
import Nav from './nav_bar'

export default function Header(){
return(
    <div className='header'>
    <Nav/>
    <h1>Nicholas Gonzalez</h1>
    <p>Software Developer</p>
    <div>
        <button className="contact-btn"><h1>Get In Touch</h1></button>
    </div>
    </div>
    )
};