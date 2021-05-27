import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItems from '../ReveiwItmes/ReviewItems';
import happyImage from '../../images/giphy.gif';


const Review = () => {
    const [cart, setCart] = useState([]);
    const [placeOrder , setPlaceOrder] = useState(false)
    const removeProduct = pdKeys => {
        const newCart = cart.filter(pd => pd.key !== pdKeys);
        removeFromDatabaseCart(pdKeys);
        setCart(newCart);
    }
    useEffect(() => {
        const saveCart = getDatabaseCart();
        const productKeys = Object.keys(saveCart);
        // console.log(saveCart);
        const cartProducts = productKeys.map(key => {
           const product = fakeData.find(pd => pd.key === key)
           product.quantity = saveCart[key] ;
           return product;
        })
           setCart(cartProducts);
    },[]);

    let thank; 
          if(placeOrder){
                   thank = <img src={happyImage} alt="happpy image" />
    }
         const handlePlaceOrder = () => {
             setCart([]);
             setPlaceOrder(true)
             processOrder()
         }
      // total product show use of reduce method
    const  Quantity = cart.reduce((sum , element) => sum + element.quantity , 0 )
    return (
        <div>
            <div className="twin-container">
            <div className="product-container">
            {
               cart.map(pd => <ReviewItems 
                removeProduct={removeProduct}
               product={pd}>
                    </ReviewItems>)
            }
              {thank}
            </div>
            <div className="card-container">
                  <Cart cart={cart}>
                  <button onClick={handlePlaceOrder} className="main-button">Place Order</button>
                  </Cart>
            </div>
            </div>   
        </div>
    );
};

export default Review;