import React, { useEffect, useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import Header from '../Header/Header';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';

const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState([]);

    useEffect(()=> {
        const saveCart = getDatabaseCart();
        const previewsKey = Object.keys(saveCart);
       const preiwscart = previewsKey.map(exestinKey => {
           const product = fakeData.find(pd => pd.key === exestinKey);
           product.quantity = saveCart[exestinKey];
           return product;
         })
        // console.log(preiwscart);
          setCart(preiwscart);
          
      }, [])

    const handleAddToCart = product => {
       const toBeAddedKey = product.key;
    //    console.log(product);
       const sameProduct = cart.find(pd => pd.key === toBeAddedKey);
       let count =1 ;
       let newCart;
       if(sameProduct){
           console.log(sameProduct);
           count = sameProduct.quantity + 1;
           sameProduct.quantity = count;
           const others = cart.filter(pd => pd.key !== toBeAddedKey)
           newCart = [...others , sameProduct]
       }
       else {
           product.quantity = 1; 
           newCart =[...cart ,product];
       }
          setCart(newCart);
        addToDatabaseCart(product.key , count);
    }
    return (
        <div className="twin-container">
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
                <Cart cart={cart}>
                <Link to="/review"><button className="main-button">Review Order</button> </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;