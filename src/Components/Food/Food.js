import React from 'react';
import './Food.css';

const Food = (props) => {
    const {name, image, description, price} = props.food;
    return (
        <div className="food-container">
            <div className="card border-0 card-style" style={{ width: "18rem" }}>
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <a href="/" className="btn btn-primary">Add to cart</a>
                </div>
            </div>
        </div>
    );
};

export default Food;