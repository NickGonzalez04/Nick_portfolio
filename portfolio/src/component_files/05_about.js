import React from 'react';


// Styles and Icons
import '../style_files/05_about.scss'
import {AboutIcon} from '../assets_file/svg_file/00_about_Icon';



export default function About(){
    return (
        <div id="about" className='about'>
            <div className="about-header">
            <AboutIcon/>
            <h1>About</h1>
            </div>
            <p>Hi there! My Name is Nicholas Gonzalez and I am software developer. Check out my projects below!</p>
            <p>
              
            </p>
        </div>

    )
};