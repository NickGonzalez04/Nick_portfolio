import React, { useState } from 'react';

// Styles
import '../style_files/04_contact.scss'

 const Contact = () => {
     const [signUp, setSignUp] = useState({
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
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
            <div>
                <label for='email'>Email: </label>
                <input
                    type='email'
                    placeholder='Email'
                    value={signUp.email}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label for='name'>Name: </label>
                <input
                    type='text'
                    placeholder='Name'
                    value={signUp.user_name}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label for='fsubject'>Message: </label>
                <textarea
                    value=''
                    type='text'
                    placeholder='Message...' />
            </div>
            </form>

            <button type='submit' className='message'>Send Message</button>
        </div>
    )
};

export default Contact;