import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItems from '../ReveiwItmes/ReviewItems';
import happyImage from '../../images/giphy.gif';
import { useHistory } from 'react-router';


const Review = () => {
    const [cart, setCart] = useState([]);
    const [placeOrder , setPlaceOrder] = useState(false)
    const removeProduct = pdKeys => {
        const newCart = cart.filter(pd => pd.key !== pdKeys);
        removeFromDatabaseCart(pdKeys);
        setCart(newCart);
    }
        document.title = "Review"
    useEffect(() => {
        const saveCart = getDatabaseCart();
        const productKeys = Object.keys(saveCart);
         
          fetch("https://evening-ravine-87925.herokuapp.com/productsByKeys", {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(productKeys),
          })
            .then((res) => res.json())
            .then((data) => setCart(data));
    },[]);

          let thank; 
          if(placeOrder){
                   thank = <img src={happyImage} alt="happpy image" />
                       }
         const history = useHistory();
         const handleProceedCheckout = () => {
            history.push('/shipment')

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
                  <button onClick={handleProceedCheckout} className="main-button">Proceed Checkout</button>
                  </Cart>
            </div>
            </div>   
        </div>
    );
};

export default Review;