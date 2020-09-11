import React from 'react';
import '../style_files/02_header.scss';


// Components 
import Nav from './01_nav_bar.js'

export default function Header(){


    return (
        <>
         <Nav />
        <div className='header'>
            <div className="section">
                <div className="section_2">
                    <div>
                        <h4>Software Engineer</h4>
                        <h2>
                            Nicholas Gonzalez
                    </h2>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
};