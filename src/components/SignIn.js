import React, {useState, useContext} from 'react';
import {firebaseAuth} from '../provider/AuthProvider'


function SignIn() {
    const {handleSignIn, signInInputs, setSignInInputs} = useContext(firebaseAuth)

    function handleChange(e) {
        e.preventDefault()
        const {name, value} = e.target
        setSignInInputs(prev => ({...prev, [name]: value}))
    }

    async function handleSubmit(e) {
        e.preventDefault()
        await handleSignIn()
        console.log("singedIp");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                Sign In
                <input onChange={handleChange} name="email" placeholder="email" value={signInInputs.email}/>
                <input onChange={handleChange} name="password" placeholder="password" value={signInInputs.password}/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SignIn
