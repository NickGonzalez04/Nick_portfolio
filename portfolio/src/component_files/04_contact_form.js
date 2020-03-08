import React, { useState } from 'react';
import axios from 'axios';
import Loading from './08_loader';
// Styles
import '../style_files/04_contact.scss'
import {GmailIcon} from '../assests_file/svg_file/03_gmail_icon';

 const Contact = () => {
     const [signUp, setSignUp] = useState({
        // email: '',
        // name: '',
        // message: ''
     });
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
        <div className='line2'></div>
        {isLoading ? (
            <div>
                <Loading/>
                </div>
                ):(
        <div className='contact-form' >
        
            <form onSubmit={handleSubmit}>
                <div className="contact-header">
                    <GmailIcon />
                    <h1>CONTACT ME</h1>
                </div>
                    <div className="input-wrapper">
                        <div className="contact-input">
                            <input
                                type='email'
                                name='email'
                                placeholder='Email'
                                value={signUp.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="contact-input">
                            <input
                                type='text'
                                name='name'
                                placeholder='Name'
                                value={signUp.firstName}
                                onChange={handleChange}
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
                        />
                    </div>
            </form>

            <button onClick={handleSubmit} className='message'>Send</button>
        </div>
           )}
    </>
    )
};

export default Contact;