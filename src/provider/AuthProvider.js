import React, {useState} from 'react';
import firebase from 'firebase'
import {signIn, signUp, logOut} from '../firebase/AuthMethods'

export const firebaseAuth = React.createContext()
const auth = firebase.auth()

function AuthProvider(props) {
    const defaultState = {email: '', password: ''}
    const [signUpInputs, setSignUpInputs] = useState(defaultState)
    const [signInInputs, setSignInInputs] = useState(defaultState)

    const handleSignup = () => {
        console.log("handle signup");
        signUp(auth, signUpInputs.email, signUpInputs.password)
    }
    const handleSignIn = () => {
        console.log("handle signup");
        signIn(auth, signInInputs.email, signInInputs.password)
    }
    const handleLogout = () => {
        console.log("handle log out");
        logOut(auth)
    }
    return (
       <firebaseAuth.Provider
       value={{
            test:"context is working",
            handleSignup,
            handleSignIn,
            handleLogout,
            setSignUpInputs,
            setSignInInputs,
            signUpInputs,
            signInInputs,
       }}
       >
           {props.children}
       </firebaseAuth.Provider>
    )
}

export default AuthProvider
