import React from 'react';
import './Login.css';
import image from '../../images/logo2.png';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInWithEmailPassword, handleEmailChange, handlePasswordChange } = useAuth();
    return (
        <div className="wrapper">
            <div className='container login-container'>
                <form className='login-form'>
                    <img src={image} alt="" className='w-50 mb-5' />

                    <div className="form-group mb-4">
                        <input onChange={handleEmailChange} type="email" className="form-control py-3" id="email" placeholder="Email" required />
                    </div>
                    <div className="form-group mb-4">
                        <input onChange={handlePasswordChange} type="password" className="form-control py-3" id="password" placeholder="Password" required />
                    </div>
                </form>
                <button onClick={signInWithEmailPassword} type="submit" className="btn btn-danger btn-block w-100 py-3">Sign In</button>
                <NavLink className='text-danger nav-link mt-3' to='/sign-up'>Don't have an account?</NavLink>
            </div>
        </div>
    );
};

export default Login;