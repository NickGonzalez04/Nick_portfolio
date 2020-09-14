import React from 'react';
import '../style_files/01_nav_bar.scss';
import Resume from '../document/Nicholas_Gonzalez_Resume_08_26_2020.pdf'

export default function Nav(){


    return(

        <div className="nav">
            <div className="containerMain">
            <div className="navContainer1">
            </div>
            <div className="navContainer2"><div>
            </div>
                {/* <div className="tabs-nav">
                    <a href="#about">About</a>
                </div> */}
                <div className="tabs-nav">
                    <a href="#projects">Projects</a>
                </div>
                <div className="tabs-nav">
                    <a href={Resume}>Resume</a>
                </div>
                <div className="tabs-nav">
                    <a href="#contact">
                        <button type="submit" className="contact-btn">Contact</button>
                    </a>
                </div>
            </div>
            </div>
        </div>
    )
};