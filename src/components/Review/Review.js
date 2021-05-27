import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItems from '../ReveiwItmes/ReviewItems';


const Review = () => {
    const [card, setCard] = useState([]);
    const removeProduct = pdKeys => {
        const newCard = card.filter(pd => pd.key !== pdKeys);
        removeFromDatabaseCart(pdKeys);
        setCard(newCard);
    }
    useEffect(() => {
        const saveCard = getDatabaseCart();
        const productKeys = Object.keys(saveCard);
        // console.log(productKeys);
        const cardProducts = productKeys.map(key => {
           const product = fakeData.find(pd => pd.key === key)
           product.quantity = saveCard[key];
           return product;
        })
           setCard(cardProducts);
    },[]);
      // total product show use of reduce method
    const  Quantity = card.reduce((sum , element) => sum + element.quantity , 0 )
    return (
        <div>
            <h2 className="text-center">Total Product: {Quantity}</h2>
            <hr/>
            <div className="twin-container">
            <div className="product-container">
            {
               card.map(pd => <ReviewItems 
                removeProduct={removeProduct}
               product={pd}>
                    </ReviewItems>)
            }
            </div>
            <div className="card-container">
                  <Cart cart={card}></Cart>
            </div>
            </div>   
        </div>
    );
};

export default Review;