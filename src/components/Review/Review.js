import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItems from '../ReveiwItmes/ReviewItems';


const Review = () => {
    const [cart, setCart] = useState([]);
    const removeProduct = pdKeys => {
        const newCart = cart.filter(pd => pd.key !== pdKeys);
        removeFromDatabaseCart(pdKeys);
        setCart(newCart);
    }
    useEffect(() => {
        const saveCart = getDatabaseCart();
        const productKeys = Object.keys(saveCart);
        console.log(saveCart);
        const cartProducts = productKeys.map(key => {
           const product = fakeData.find(pd => pd.key === key)
           product.quantity = saveCart[key] ;
           return product;
        })
           setCart(cartProducts);
    },[]);
      // total product show use of reduce method
    const  Quantity = cart.reduce((sum , element) => sum + element.quantity , 0 )
    return (
        <div>
            <h2 className="text-center">Total Product: {Quantity}</h2>
            <hr/>
            <div className="twin-container">
            <div className="product-container">
            {
               cart.map(pd => <ReviewItems 
                removeProduct={removeProduct}
               product={pd}>
                    </ReviewItems>)
            }
            </div>
            <div className="card-container">
                  <Cart cart={cart}></Cart>
            </div>
            </div>   
        </div>
    );
};

export default Review;