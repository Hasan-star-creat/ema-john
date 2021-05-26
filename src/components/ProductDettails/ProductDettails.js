import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDettails = () => {
    const {productkey} = useParams();
    const product = fakeData.find(pd => pd.key === productkey)
    //  console.log(product)
    return (
        <div>
             <h3 className="text-center">procuct dettailse here</h3>
             {
                <Product cardAddProduct = {false} product={product}></Product>
             }
        </div>
    );
};

export default ProductDettails;