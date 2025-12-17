
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

import { useState } from 'react';
import app from '../../firebase/firebase.init';

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)

    // Register
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };


    const authInfo = {
        loading,
        createUser,
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;