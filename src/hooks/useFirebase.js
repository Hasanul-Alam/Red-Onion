import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from '../Firebase/Firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    // Auth
    const auth = getAuth();
    // Provider
    const googleProvider = new GoogleAuthProvider();

    // Google Sign In
    const googleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
                console.log(typeof (result.user))
            })
    }

    // Sign Up With Email & Password
    const emailPasswordSignUp = () => {
        if (password === confirmPassword) {
            createUserWithEmailAndPassword(auth, email, password)
                .then(result => {
                    setUser(result.user)
                    window.location = '/home'
                    setError('')
                    console.log(result.user)
                })
                .catch(error => {
                    setError(error.message);
                })
        }
        else if (password !== confirmPassword) {
            setError('Please carefully put your password.');
        }
    }

    // Sign In With Email & Password
    const signInWithEmailPassword = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
                window.location = '/home'
                setError('')
                console.log(result.user)
            })
            .catch(error => {
                setError(error.message)
            })
    }

    // Sign-Out
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }

    // Handle Email & Password Functions
    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }
    const handleConfirmPassword = (event) => {
        setConfirmPassword(event.target.value)
    }

    // On Auth State Changed
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        })
    }, [])

    return {
        googleSignIn,
        logOut,
        handleEmailChange,
        handlePasswordChange,
        handleConfirmPassword,
        emailPasswordSignUp,
        signInWithEmailPassword,
        error,
        user
    }
};

export default useFirebase;