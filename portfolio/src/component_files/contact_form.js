import React from 'react';



export default function Contact(){

    return(
        <div>
            <div>
                <label for='email'>Email: </label>
                <input
                    value=''
                    type='email'
                    placeholder='Email'
                />
            </div>
            <div>
                <label for='name'>Name: </label>
                <input
                    value=''
                    type='text'
                    placeholder='Name'
                />
            </div>
            <div>
                <label for='fsubject'>Message: </label>
                <textarea
                    value=''
                    type='text'
                    placeholder='Message...' />
            </div>
        </div>
    )
};