import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FoodDetails = () => {
    const {foodId} = useParams();
    const strFoodId = parseInt(foodId);
    

    const [meal, setMeal] = useState({});
    const {name, image, description, category, price} = meal;

    useEffect(() => {
        fetch('/fakeData.json')
            .then(res => res.json())
            .then(results => {
                results.forEach(result => {
                    if(result.id === strFoodId){
                        setMeal(result)
                        return
                    }
                })
            })
    }, [])

    return (
        <div>
            <h2>This is {name}</h2>
            <h4>Price: ${price}</h4>
            <img src={image} alt="" />
        </div>
    );
};

export default FoodDetails;