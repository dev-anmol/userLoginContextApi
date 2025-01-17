import { useContext } from "react"
import React from 'react'
import UserContext from "../context/UserContext"

const Profile = () => {
    const {user} = useContext(UserContext);
    if(!user) {
        return <div>Please Login</div>
    }else{
        return <div>Welcome {user.username}</div>
    }
}

export default Profile