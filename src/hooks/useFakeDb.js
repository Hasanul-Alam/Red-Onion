import { useState } from "react";

const useFakeDb = () => {
    const [cart, setCart] = useState([]);
    // use local storage as your db for now
    const addToDb = (key, quantity) => {
        const exists = getDb();
        let shopping_cart = {};
        if (!exists) {
            shopping_cart[key] = quantity;
        }
        else {
            shopping_cart = JSON.parse(exists);
            if (shopping_cart[key]) {
                const newCount = shopping_cart[key] + quantity;
                shopping_cart[key] = newCount;
            }
            else {
                shopping_cart[key] = quantity;
            }
        }
        console.log(shopping_cart);
        updateDb(shopping_cart);
    }

    const getDb = () => localStorage.getItem('shopping_cart');

    const updateDb = shoppingCart => {
        localStorage.setItem('shopping_cart', JSON.stringify(shoppingCart));
    }

    // Handle Add To Cart
    const handleAddToCart = (meal, quantity) => {
        const exist = cart.find(ml => ml.key === meal.key);
        let newCart = [];
        if (exist) {
            const rest = cart.filter(fd => fd.key !== meal.key);
            exist.quantity = exist.quantity + quantity;
            newCart = [...rest, meal];
            setCart(newCart);
        }
        else {
            meal.quantity = quantity;
            newCart = [...cart, meal];
            setCart(newCart);
        }
        // save to local storage (for now)
        addToDb(meal.key, quantity);
    }

    const removeFromDb = id => {
        const exists = getDb();
        if (!exists) {

        }
        else {
            const shopping_cart = JSON.parse(exists);
            delete shopping_cart[id];
            updateDb(shopping_cart);
        }
    }

    const getStoredCart = () => {
        const exists = getDb();
        return exists ? JSON.parse(exists) : {};
    }

    const clearTheCart = () => {
        localStorage.removeItem('shopping_cart');
    }

    return {
        addToDb,
        removeFromDb,
        clearTheCart,
        getStoredCart,
        getDb,
        handleAddToCart,
        cart
    }
}
export default useFakeDb;