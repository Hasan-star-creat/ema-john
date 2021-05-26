import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const Product = (props) => {
    // console.log(props)
    const {name,img,price,seller,key} = props.product;
    return (
        <div className="single-product-container">
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
                <h4 className="product-name"><Link to={"/product/"+key}>{name}</Link></h4>
                <p>Only: ${price}</p>
                <p>by: {seller}</p>
                <br/>
               { props.cardAddProduct && <button className="main-button" onClick={() => props.handleAddToCart(props.product)}> <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>}
            </div>
        </div>
    );
};

export default Product;