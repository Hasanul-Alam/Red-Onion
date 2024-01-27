import React from 'react';
import './Header.css';
import logo from '../../images/logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid small-width">
                    <NavLink className="navbar-brand logo" to="/"><img className='w-100' src={logo} alt="" /></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <NavLink className="offcanvas-title logo" id="offcanvasNavbarLabel" to="/home"><img className='w-100' src={logo} alt="" /></NavLink>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item mx-2">
                                    <NavLink className="nav-link active login" aria-current="page" to="/cart"><FontAwesomeIcon icon={faCartShopping} /></NavLink>
                                </li>
                                <li className="nav-item mx-2">
                                    <NavLink className="nav-link active login" aria-current="page" to="/login">Login</NavLink>
                                </li>
                                <li className="nav-item mx-2">
                                    <NavLink className="nav-link" to="/sign-up"><button className='btn btn-danger rounded-pill'>Sign Up</button></NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
    );
};

export default Header;