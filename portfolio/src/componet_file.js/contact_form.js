import React from 'react';



export default function Contact(){



    return(
        <div>
            <div>
                <label for='email'>EMAIL: </label>
                <input
                    value=''
                    type='email'
                    placeholder='Email'
                />
            </div>
            <div>
                <label for='name'>NAME: </label>
                <input
                    value=''
                    type='text'
                    placeholder='Name'
                />
            </div>
            <div>
                <label for='fsubject'>SUBJECT: </label>
                <textarea
                    value=''
                    type='text'
                    placeholder='Write Something here...' />
            </div>
        </div>
    )
}