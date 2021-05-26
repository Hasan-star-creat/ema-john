import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart } from '../../utilities/databaseManager';
import ReviewItems from '../ReveiwItmes/ReviewItems';


const Review = () => {
    const [card, setCard] = useState([]);
    useEffect(() => {
        const saveCard = getDatabaseCart();
        const productKeys = Object.keys(saveCard);
        // console.log(productKeys);
        const cardProducts = productKeys.map(key => {
           const product = fakeData.find(pd => pd.key === key)
           product.quantity = saveCard[key];
           return product;
        })

        // for(let i = 0; i<productKeys.length; i++){
        //     let element = productKeys[i];
        //     let counts = (saveCard[element]);
        // }
           setCard(cardProducts);
    },[]);
   
    const  Quantity = card.reduce((sum , element) => sum + element.quantity , 0 )
     // let Quantity = 0;
    //    for(let i =0; i < card.length; i++){
    //        let element = card[i];
    //        Quantity = Quantity + element.quantity;
    //    }
       
    return (
        <div>
            <h2 className="text-center">Total Product: {Quantity}</h2>
            <hr/>
            {
               card.map(pd => <ReviewItems 
               product={pd}>
                    </ReviewItems>)
            }
            
        </div>
    );
};

export default Review;