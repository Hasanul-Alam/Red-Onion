import React from 'react';
import './Home.css';
import footerLogo from '../../images/logo.png';

const Home = () => {
    return (
        <div className='home-container'>
            {/* Banner part */}
            <div className="banner-container">
                <div className="search-container">
                    <h1>Best food waiting for your belly</h1>
                    <div className="input-group mb-3 w-75 mx-auto">
                        <input type="text" className="form-control rounded-pill me-2" placeholder="Search food items" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <button className="btn btn-danger rounded-pill">Search</button>
                    </div>
                </div>
            </div>

            {/* Small Menu Part */}
            <div className='my-5'>
                <ul className="nav justify-content-center">
                    <li className="nav-item me-2">
                        <a className="nav-link text-dark fw-medium" aria-current="page" href="/">Breakfast</a>
                    </li>
                    <li className="nav-item me-2">
                        <a className="nav-link text-dark fw-medium" href="/">Lunch</a>
                    </li>
                    <li className="nav-item me-2">
                        <a className="nav-link text-dark fw-medium" href="/">Dinner</a>
                    </li>
                </ul>
            </div>

            {/* Foods Part */}
            <div className="row row-cols-1 row-cols-md-3 g-4 small-width my-5">
                <div className="col">
                    <div className="card">
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
            </div>
            <button className="btn btn-danger text-light my-5">Checkout Your Food</button>

            {/* Why choose us section */}
            <div className="small-width mb-5">
                <div className="text-start">
                    <h2>Why you choose us</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At optio, atque laboriosam expedita <br />dolor sint ratione doloremque quaerat sunt pariatur sequi ipsum, omnis sit sed?</p>
                </div>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card">
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <div className="footer-container bg-dark text-light py-1">
                <div className="container text-center mt-5 p-3 small-width">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 me-0">
                        <div className="col-lg-6 text-start mt-3">
                            <img src={footerLogo} alt="" className='w-50 img-fluid' />
                        </div>
                        <div className="col-lg-3 pe-5 text-start">
                            <p>About online food</p>
                            <p>Read our blogs</p>
                            <p>Sign up to deliver</p>
                            <p>Add your restaurent</p>
                        </div>
                        <div className="col-lg-3 pe-5 text-start">
                            <p>Get help</p>
                            <p>Read FAQs</p>
                            <p>View all cities</p>
                            <p>Restaurents near me</p>
                        </div>
                    </div>
                </div>
                <p className='text-secondary pt-3'>Copyright @ 2020 Online Food</p>
            </div>
        </div>
    );
};

export default Home;