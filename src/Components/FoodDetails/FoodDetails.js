import React, { useEffect, useState } from 'react';
import './FoodDetails.css';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import useFakeDb from '../../hooks/useFakeDb';

const FoodDetails = () => {
    const { foodId } = useParams();
    const strFoodId = parseInt(foodId);

    const [meal, setMeal] = useState({});
    const [quantity, setQuantity] = useState(1);


    const { name, image, description, price } = meal;
    const { handleAddToCart } = useFakeDb();

    useEffect(() => {
        fetch('/fakeData.json')
            .then(res => res.json())
            .then(results => {
                results.forEach(result => {
                    if (result.id === strFoodId) {
                        setMeal(result)
                        return
                    }
                })
            })
    }, [])

    // Handle Quantity Increase Decrease
    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    // Handle Add To Cart

    return (
        <div className="container text-start mt-5">
            <div className="row align-items-center">
                <div className="col-lg-5 col-md-12 col-sm-12">
                    <h2>{name}</h2>
                    <p className='d-inline'>{description}</p>
                    <p className='d-inline'>{description}</p>
                    <h3 className='mt-4 ms-2 mb-3'>${parseInt(price) * quantity}</h3>
                    {/* Increase Decrease Button */}
                    <div className="container button-style ms-0 ps-0">
                        <div className="input-group mb-3 border rounded-pill ">
                            <div className="input-group-prepend">
                                <button onClick={decreaseQuantity} className="btn fw-bold fs-5 border-0" type="button" id="decreaseBtn">-</button>
                            </div>
                            <input type="text" className="form-control border-0 text-center fs-4" id="quantityInput" value={quantity} />
                            <div className="input-group-append">
                                <button onClick={increaseQuantity} className="btn text-danger fw-bold fs-5 border-0" type="button" id="increaseBtn">+</button>
                            </div>
                        </div>
                    </div>
                    <button onClick={() => handleAddToCart(meal,quantity)} className="btn btn-danger rounded-pill px-4 mt-2"><FontAwesomeIcon className='me-2' icon={faCartShopping} />Add To Cart</button>
                </div>
                <div className="col-lg-7 col-md-12 col-sm-12 text-center mt-4">
                    <img className='w-75' src={image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;