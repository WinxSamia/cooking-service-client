import React, { createContext } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';

export const customerContext = createContext();
const auth = getAuth(app)

const Context = ({ children }) => {


    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logout = () => {
        return signOut(auth);
    }
    const info = {
        signup,
        login,
        logout
    }
    return (

        <customerContext.Provider value={info}>
            {children}
        </customerContext.Provider>

    );
};

export default Context;