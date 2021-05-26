import React from 'react';
import { Row } from 'react-bootstrap';

const ReviewItems = (props) => {
    const product = props.product;
    const {name , quantity, price} =product;
    const reviewItemsStyle={
          borderBottom:'1px solid lightgray',
          paddingBottom:'10px',
          marginLeft:'200px'
    };

    return (
        <div style={reviewItemsStyle} className="mt-5">
            <h4 className="product-name">{name}</h4>
            <b>Quantity: {quantity}</b><br/>
            <b>Price: {price}</b><br/>
            <button className="main-button">Remove</button>
        </div>
    );
};

export default ReviewItems;