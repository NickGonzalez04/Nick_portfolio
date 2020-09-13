import React, { useState } from 'react';
import axios from 'axios';
import emailjs from 'emailjs-com';

import Loading from './08_loader';
// Styles
import '../style_files/04_contact.scss'

 const Contact = () => {
     const [signUp, setSignUp] = useState({});
     const [isLoading, setIsLoading ] = useState(false);

    const handleChange = e => {
        console.log(e.target.value);
        setSignUp({
            ...signUp,
            [e.target.name]: e.target.value,
        });
    };

     const sendEmail = e => {
         e.preventDefault();
         setIsLoading(true)
         emailjs.sendForm('process.env.SERVICE_ID', 'process.env.TEMPLATE_ID',e.target, 'process.env.USER_ID')
             .then(res => {
                 setIsLoading(false);
                 console.log(res.text);
             })
             .catch(err => { setIsLoading(false); console.log(err.text); })
     }

    return(
        <>
             {isLoading ? (
                 <div className="loadingComp">
                     <Loading />
                     <h1>Message Sending...</h1>
                 </div>
             ) : (
                     <div id="contact" className="Form">
                         <div className='contact-form' >
                             <form onSubmit={sendEmail}>
                                 <div className="contact-header">
                                     <div className="contact-h1">
                                         <h1>CONTACT ME</h1>
                                     </div>
                                     <div className="contact-p">
                                         <p>Feel free to contact me via <a className='social' href="https://www.linkedin.com/in/nicholasgonzalez1/">LinkedIn</a>, <a className='socail' href='https://twitter.com/NickGonzalez__'>Twitter</a>, or Email below! I would love to connect with you!😃 </p>
                                     </div>
                                 </div>

                                 <div className="input-wrapper">
                                     <div className="contact-input">
                                         <input
                                             type='text'
                                             name='user_name'
                                             placeholder='Name'
                                             value={signUp.email}
                                             onChange={handleChange}
                                             required
                                         />
                                     </div>
                                     <div className="contact-input">
                                         <input
                                             type='email'
                                             name='user_email'
                                             placeholder='Email'
                                             value={signUp.firstName}
                                             onChange={handleChange}
                                             required
                                         />
                                     </div>
                                 </div>
                                 <div className="message-input">
                                     <textarea
                                    value={signUp.message}
                                         name='message'
                                         type='submit'
                                         placeholder='Message...'
                                         onChange={handleChange}
                                         required
                                     />
                                 </div>
                             </form>

                             <button onClick={sendEmail} className='message'>Send</button>
                         </div>
                     </div>
                     
                 )}
         </>
     )
 };

export default Contact;