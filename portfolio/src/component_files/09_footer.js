import React from 'react';
import '../style_files/09_footer.scss';

//Icons
import {Linkedin} from '../assets_file/svg_file/06_linkedin_Icon'


export default function Footer(){


    return(

        <div className="footer-nav">
            <div className="tabs-container">
            <div className="tabs-nav">
                <a href="#about">About</a>
            </div>
            <div className="tabs-nav">
                <a href="#projects">Projects</a>
            </div>
            <div className="tabs-nav">
                <a href="#contact">Contact</a>
            </div>
            </div>
            <div className="icons">
            <a href='https://www.linkedin.com/in/nicholas-gonzalez-0541bb111/'>
            <Linkedin/>
            </a>
            <a  href='Tel:+15613124547'>
                    <img src='/images/phone.png' alt="picture of a phone" />
                </a>
            <a href='mailto: nicholasagonzalez1@gmail.com'>
                <img src='/images/email.png' alt="picture of a email symbol"/>
            </a>
            </div>
        </div>
    )
};