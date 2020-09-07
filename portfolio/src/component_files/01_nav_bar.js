import React from 'react';
import '../style_files/01_nav_bar.scss';


export default function Nav(){


    return(

        <div className="header-nav">
            <div className="navContainer">
                <div className="tabs-nav">
                    <a href="#projects">Projects</a>
                </div>
                <div className="tabs-nav">
                    <a href="#contact">Contact</a>
                </div>
                <div className="tabs-nav">
                    <a href="#contact">
                        <button type="submit" className="contact-btn">Get In Touch</button>
                    </a>
                </div>
            </div>
        </div>
    )
};