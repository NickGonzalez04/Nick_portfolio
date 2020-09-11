import React from 'react';
import '../style_files/09_footer.scss';

//Icons
import {Linkedin} from '../assets_file/svg_file/06_linkedin_Icon'


export default function Footer(){


    return (
        <>
        <hr></hr>
			<div className='footer-nav'>
				<div className='tabs-container'>
					<div className='tabs-nav'>
						<a href='#projects'>Projects</a>
					</div>
					<div className='tabs-nav'>
						<a href='#projects'>Resume</a>
					</div>
					<div className='tabs-nav'>
						<a href='#contact'>Contact</a>
					</div>
				</div>
            
			<div className='copy-R'>
                <p>Copyright © {new Date().getFullYear()} Nicholas Gonzalez Built with ☕️ </p>
			</div>
               
			</div>
        </>
		);
};