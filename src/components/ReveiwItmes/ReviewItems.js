import React from 'react';
import { Row } from 'react-bootstrap';

const ReviewItems = (props) => {
    // console.log(props)
    const product = props.product;
    const {name , quantity, price, key} =product;
    const reviewItemsStyle={
          borderBottom:'1px solid lightgray',
          paddingBottom:'10px',
    };

    return (
        <div style={reviewItemsStyle}>
            <h4 className="product-name">{name}</h4>
            <b>Quantity: {quantity}</b><br/>
            <b>Price: {price}</b><br/>
            <button onClick = { () => props.removeProduct(key)} className="main-button">Remove</button>     
        </div>
    );
};

export default ReviewItems;