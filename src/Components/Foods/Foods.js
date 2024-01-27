import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';
import './Foods.css';

const Foods = () => {
    const [foods, setFoods] = useState([]);
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, []);

    const breakfast = [];
    const lunch = [];
    const dinner = [];

    // foods.map(food => {
    //     if(food.category === 'breakfast'){
    //         breakfast.push(food);
    //     }
    //     else if(food.category === 'lunch'){
    //         lunch.push(food);
    //     }
    //     else{
    //         dinner.push(food);
    //     }
    // });

    foods.forEach(food => {
        if(food.category === 'breakfast'){
            breakfast.push(food);
        }
        else if(food.category === 'lunch'){
            lunch.push(food);
        }
        else{
            dinner.push(food);
        }
    });


    const pushFoods = (value) => {
        if(value === 'b'){
            setMeals(breakfast);
        }
        else if(value === 'l'){
            setMeals(lunch);
        }
        else if(value === 'd') {
            setMeals(dinner);
        }
        else{
            setMeals(breakfast);
        }
    }

    return (
        <>
            <div className='my-5' >
                <ul className="nav justify-content-center">
                    <li className="nav-item me-2">
                        <button id='breakfast-btn' className="nav-link fw-medium" onClick={()=>pushFoods('b')} onLoad={() => pushFoods('b')}>Breakfast</button>
                    </li>
                    <li className="nav-item me-2">
                        <button id='lunch-btn' className="nav-link fw-medium" onClick={()=>pushFoods('l')}>Lunch</button>
                    </li>
                    <li className="nav-item me-2">
                        <button id='dinner-btn' className="nav-link fw-medium" onClick={()=>pushFoods('d')}>Dinner</button>
                    </li>
                </ul>
            </div>
            <div className="foods-container">
                {
                    meals.map(food => <Food
                        key={food.id}
                        food={food}
                    ></Food>)
                }
            </div>
        </>
    );
};

export default Foods;