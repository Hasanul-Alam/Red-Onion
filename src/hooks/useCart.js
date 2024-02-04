import { useEffect, useState } from "react"
import useFakeDb from "./useFakeDb";

const useCart = (products) => {
    const [cart, setCart] = useState([]);

    const {getStoredCart} = useFakeDb();

    useEffect( () => {
        if(products.length){
            const savedCart = getStoredCart();
            const storedCart = [];
            for(const key in savedCart){
                const addedProduct = products.find(pd => pd.key === key)
                if(addedProduct){
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct);
                }
            }
            setCart(storedCart);
        }
    },[products])
    return [cart, setCart];
}
export default useCart;