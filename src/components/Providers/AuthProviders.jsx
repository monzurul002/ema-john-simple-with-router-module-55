import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';

export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProviders = ({ children }) => {

    const [user, setUser] = useState(" ");

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    //signOut
    const logOut = () => {
        signOut(auth)
            .then(() => {

            })
            .then(error => {
                console.log(error);
            })
    }

    //onAuthObserver

    useEffect(()=>{
    const unsubScribe = onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
        })

        return ()=>{
            unsubScribe()
        }
    },[])

   
    const authInfo = {
        createUser,
        signIn,
        logOut,
        user
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;