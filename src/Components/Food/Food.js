import React from 'react';
import './Food.css';
import { NavLink } from 'react-router-dom';

const Food = (props) => {
    const {name, image, description, id} = props.food;
    return (
        <div className="food-container">
            <div className="card border-0 card-style" style={{ width: "18rem" }}>
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <NavLink to={`/food-details/${id}`} className="btn btn-primary">Show Details</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Food;