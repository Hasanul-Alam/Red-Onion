import React from 'react';
import './Cart.css';
import useProducts from '../../hooks/useProducts';
import useCart from '../../hooks/useCart';
import StoredProduct from '../StoredProduct/StoredProduct';

const Cart = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);
    return (
        <div>
            <div className="container text-center">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 text-start">
                        <div className="form-width">
                            <h2 className=''>Add Delivery Details</h2>
                            <hr className='opacity-50' />
                            <div className='container'>
                                <form className='login-form'>
                                    <div className="form-group mb-4">
                                        <input type="email" className="form-control py-2 border-0 background-color" placeholder="Email" />
                                    </div>
                                    <div className="form-group mb-4">
                                        <input type="password" className="form-control py-2 border-0 background-color" placeholder="Password" />
                                    </div>
                                    <div className="form-group mb-4">
                                        <input type="password" className="form-control py-2 border-0 background-color" placeholder="Confirm Password" />
                                    </div>
                                    <div className="form-group mb-4">
                                        <input type="password" className="form-control py-2 border-0 background-color" placeholder="Confirm Password" />
                                    </div>
                                    <div className="form-group mb-4">
                                        <textarea className="form-control py-3 border-0 background-color" name="" cols="20" rows="2" placeholder='Add delivery instructions'></textarea>
                                    </div>
                                </form>
                                <button className="btn btn-danger btn-block w-100 py-3">Save & Continue</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 d-lg-flex justify-content-end text-sm-center">
                        {
                            <StoredProduct
                                cart = {cart}
                                setCart = {setCart}
                            ></StoredProduct>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;