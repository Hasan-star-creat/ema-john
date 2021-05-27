import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce( (total,prd) => total + prd.price * prd.quantity,0)
    let tax = total * 0.1;
    let shipping = 0;
    if(total > 35){
        shipping = 0;
    } 
     else if(total > 15){
        shipping = 4.99;
    }
    else if(total > 0){
        shipping = 12.99;
    }
    return (
        <div className="cart">
            <h4>Order Summary</h4>
            <p><small>Order Items: {cart.length}</small></p>
            <small>Product Price: ${total.toFixed(2)}</small><br/>
            <small>Shipping Cost: {shipping}</small><br/>
            <small>Tax + VAT: ${tax.toFixed(2)}</small><br/>
            <small className="text-danger">Total price: ${(total + tax + shipping).toFixed(2)}</small><br/><br/>
             <Link to="/review"><button className="main-button">Review Order</button> </Link>
            
        </div>
    );
};

export default Cart;
