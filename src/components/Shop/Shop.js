import React, { useEffect, useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import Header from '../Header/Header';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    const handleAddToCart = product => {
        const newCart = [...cart, product];
        setCart(newCart);
    }

    useEffect(()=> {
        // console.log(fakeData)
        setProducts(fakeData);
    }, [])
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product => <Product 
                        product={product} 
                        cardAddProduct={true}
                        handleAddToCart={handleAddToCart}
                        ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;