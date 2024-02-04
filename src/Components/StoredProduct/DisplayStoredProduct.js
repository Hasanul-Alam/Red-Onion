import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const DisplayStoredProduct = (props) => {
    const { name, price, quantity, image } = props.product;
    return (
        <>
            <tbody>
                <tr>
                    <td>{name}</td>
                    <td><img src={image} alt="Product 1" style={{ width: "50px" }} /></td>
                    <td>${price}</td>
                    <td>{quantity}</td>
                    <td>${price * quantity}</td>
                    <td><button className="btn btn-danger btn-sm"><FontAwesomeIcon icon={faTrash} /></button></td>
                </tr>
            </tbody>
        </>
    );
};

export default DisplayStoredProduct;