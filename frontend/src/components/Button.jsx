import React, { useState } from 'react';

const Button = () => {
    
    const [name, setName] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Form submitted, ${name}`);    

    }

    return(
        <form onSubmit = {handleSubmit}>
            <input onChange = {(e) => setName(e.target.value)} value = {name}></input>
            <button type = 'submit'>Click to submit</button>
        </form>
    );
    
}

export default Button;