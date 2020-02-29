import React from 'react';
import '../style_files/01_nav_bar.scss';


export default function Nav(){


    return(

        <div className="header-nav">
            <div className="tabs-nav">
                <a>About</a>
            </div>
            <div className="tabs-nav">
                <a>Projects</a>
            </div>
            <div className="tabs-nav">
                <a>Contact</a>
            </div>
        </div>
    )

};