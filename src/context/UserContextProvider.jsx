import React, { useState } from "react";
import UserContext from "./UserContext";

//jo bhi prop are hai use as it use krlo (children) - just a generic name that indicates that pass anything that comes to you
const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null);
    return (
        <UserContext.Provider value={{user, setUser}}>
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider