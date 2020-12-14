import React, {useContext} from 'react';
import {firebaseAuth} from '../provider/AuthProvider'

function Signup(props) {
    const {handleSignup, signUpInputs, setSignUpInputs} = useContext(firebaseAuth)

    function handleChange(e) {
        e.preventDefault()
        const {name, value} = e.target
        setSignUpInputs(prev => ({...prev, [name]: value}))
    }

    async function handleSubmit(e) {
        e.preventDefault()
        await handleSignup()
        console.log("singedUp");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                Signup
                <input onChange={handleChange} name="email" placeholder="email" value={signUpInputs.signUpEmail}/>
                <input onChange={handleChange} name="password" placeholder="password" value={signUpInputs.signUpPassword}/>
                <button>Submit</button>
                
            </form>
        </div>
    )
}

export default Signup
