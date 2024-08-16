import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import auth from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // createUserUsingEmailPassword
    const createUserUsingEmailPassword = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // signInUsingEmailPassword
    const signInUsingEmailPassword = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    // SignOut
    const logOut = () => {
        setUser(null)
        setLoading(true)
        return signOut(auth);
    }


    // onAuthStateChanged
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {

            setUser(currentUser)
            setLoading(false)

        })
        return () => {
            unSubscribe()
        };
    }, [])

    const authInfo = {
        user,
        createUserUsingEmailPassword,
        signInUsingEmailPassword,
        logOut,
        loading
    };

    console.log(user);
    console.log(loading);
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node
};
export default AuthProvider;



