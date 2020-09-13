import React from 'react';
import '../style_files/09_footer.scss';

export default function Footer(){
    return (
        <>
        <hr></hr>
			<div className='footer-nav'>
				<p>Copyright © {new Date().getFullYear()} Nicholas Gonzalez - Built this with ☕️ and some code.</p>
			</div>
        </>
		);
};