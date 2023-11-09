import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { getAuth } from "firebase/auth"; // Add this import

const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null);
    const auth = getAuth();
    
    useEffect(() =>{
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user)
            } else {
                setAuthUser(null);
            }
        });
    }, []);
    
    return <div>{authUser ? <p>Signed In</p> : <p>Signed Out</p>} </div>;
    
};
export default AuthDetails