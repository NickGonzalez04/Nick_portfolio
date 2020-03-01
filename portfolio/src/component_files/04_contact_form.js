import React, { useState } from 'react';
import axios from 'axios';

// Styles
import '../style_files/04_contact.scss'

 const Contact = () => {
     const [signUp, setSignUp] = useState({
        // email: '',
        // name: '',
        // message: ''
     });


    const handleChange = e => {
        console.log(e.target.value);
        setSignUp({
            ...signUp,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:4000/send', signUp)
        .then(res => {
            console.log("data",res);
            // res.render('Success');
        })
        .catch(err => { console.log(err);})
    }

    return(
        <div className='contact-form'>
            <form onSubmit={handleSubmit}>
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
                    type='text'
                    placeholder='Message...'
                    onChange={handleChange}
                    
                 />
            </div>
            </form>

            <button onClick={handleSubmit} className='message'>Send Message</button>
        </div>
    )
};

export default Contact;