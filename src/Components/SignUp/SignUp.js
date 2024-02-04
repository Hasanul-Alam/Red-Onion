import React from 'react';
import './SignUp.css';
import image from '../../images/logo2.png';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const SignUp = () => {
    const { googleSignIn, handleEmailChange, handlePasswordChange, handleConfirmPassword, error, emailPasswordSignUp } = useAuth();
    return (
        <div className="wrapper">
            <div className='container login-container'>
                <form className='login-form'>
                    <img src={image} alt="" className='w-50 mb-5' />

                    <div className="form-group mb-4">
                        <input onChange={handleEmailChange} type="email" className="form-control py-3" id="email" placeholder="Email" />
                    </div>
                    <div className="form-group mb-4">
                        <input onChange={handlePasswordChange} type="password" className="form-control py-3" id="password" placeholder="Password" />
                    </div>
                    <div className="form-group mb-4">
                        <input onChange={handleConfirmPassword} type="password" className="form-control py-3" id="confirm-password" placeholder="Confirm Password" />
                    </div>
                </form>
                <button onClick={emailPasswordSignUp} className="btn btn-danger btn-block w-100 py-3">Sign Up</button>
                <button onClick={googleSignIn} className="btn btn-outline-danger mt-3">Continue With Google</button>
                <h5 className="text-danger mt-3">{error}</h5>
                <NavLink className='text-danger nav-link mt-3 d-inline' to='/login'>Already have an account?</NavLink>
            </div>
        </div>
    );
};

export default SignUp;