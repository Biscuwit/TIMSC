import React, {useContext} from 'react'
import {firebaseAuth} from '../provider/AuthProvider'

function Logout() {
    const {handleLogout} = useContext(firebaseAuth)
    async function handleOnClick(e) {
        e.preventDefault()
        await handleLogout()
        console.log("Logged out");
    }
    return (
        <button onClick={handleOnClick}>Logout</button>
    )
}

export default Logout
