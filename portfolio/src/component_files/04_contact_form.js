import React, { useState } from 'react';
import axios from 'axios';
import Loading from './08_loader';
import Resume from '../document/Nicholas_Gonzalez_Resume_2020.pdf'
// Styles
import '../style_files/04_contact.scss'
import { GmailIcon } from '../assets_file/svg_file/03_gmail_icon';

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

    const handleSubmit = e => {
        e.preventDefault();
        setIsLoading(true)
        axios.post('https://nick-portfoliobackend.herokuapp.com/send', signUp)
        .then(res => {
            setIsLoading(false);
            console.log(res);
        })
        .catch(err => { setIsLoading(false); console.log(err);})
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
                             <form onSubmit={handleSubmit}>
                                 <div className="contact-header">
                                     <div className="contact-h1">
                                         <GmailIcon />
                                         <h1>CONTACT ME</h1>
                                     </div>
                                     <div className="contact-p">
                                         <p>Feel free to contact me via LinkedIn, Twitter, or Email. I would love to connect with you! You can see my resume <a className="resume" href={Resume}>here.</a> </p>
                                     </div>
                                 </div>

                                 <div className="input-wrapper">
                                     <div className="contact-input">
                                         <input
                                             type='email'
                                             name='email'
                                             placeholder='Email'
                                             value={signUp.email}
                                             onChange={handleChange}
                                             required
                                         />
                                     </div>
                                     <div className="contact-input">
                                         <input
                                             type='text'
                                             name='name'
                                             placeholder='Name'
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
                                         type='text'
                                         placeholder='Message...'
                                         onChange={handleChange}
                                         required
                                     />
                                 </div>
                             </form>

                             <button onClick={handleSubmit} className='message'>Send</button>
                         </div>
                     </div>
                 )}
         </>
     )
 };

export default Contact;