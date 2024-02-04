import React from 'react';
import DisplayStoredProduct from './DisplayStoredProduct';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import useFakeDb from '../../hooks/useFakeDb';

const StoredProduct = (props) => {
    const { cart, setCart } = props;
    const { user } = useAuth();
    const { clearTheCart } = useFakeDb();
    const navigate = useNavigate();
    let total = 0;
    for (const product of cart) {
        total = total + product.price * product.quantity;
        console.log(total);
    }
    const handleOrder = () => {
        if (user.email) {
            navigate('/place-order');
            setCart([]);
            clearTheCart();
        }
        else {
            navigate('/login');
        }
    }
    return (
        <div>

            <div className="container mt-5">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {
                        cart.map(pd => <DisplayStoredProduct
                            key={pd.key}
                            product={pd}
                        ></DisplayStoredProduct>)
                    }
                </table>

                <div className="text-right">
                    <h4>Total: ${total}</h4>
                </div>

                <div className="text-center mt-4">
                    <button className="btn btn-danger" onClick={handleOrder}>Proceed to Checkout</button>
                </div>
            </div>


        </div>
    );
};

export default StoredProduct;

{/*  */ }