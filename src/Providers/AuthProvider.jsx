import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import auth from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // createUserUsingEmailPassword
    const createUserUsingEmailPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // signInUsingEmailPassword
    const signInUsingEmailPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // SignOut
    const logOut = () => {
        setUser(null)
        return signOut(auth);
    }


    // onAuthStateChanged
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser)
            }
        })
        return () => {
            unSubscribe()
        };
    }, [])

    const authInfo = {
        user,
        createUserUsingEmailPassword,
        signInUsingEmailPassword,
        logOut
    };

    console.log(user);
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



