import React, { useState } from 'react';
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
         let service_id = 'service_75qncw6';
         let template_id = 'template_yavsgr6';
         let user_id = 'user_nt7HV08gt2wGf1mlZRKhM';
         emailjs.send(service_id, template_id, signUp, user_id)
             .then(res => {
                 setIsLoading(false);
                 console.log('SUCCESS!', res.status, res.text);
                
             }, (err => { 
                 setIsLoading(false); 
                 console.log('...Error', err);
             }));
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
                             <form id="form" onSubmit={sendEmail}>
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
                                             value={signUp.first_name}
                                             onChange={handleChange}
                                             required
                                         />
                                     </div>
                                 </div>
                                 <div className="message-input">
                                     <textarea
                                         name='message'
                                         type='submit'
                                         placeholder='Message...'
                                         value={signUp.message}
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