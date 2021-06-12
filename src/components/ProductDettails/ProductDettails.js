import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import Product from '../Product/Product';

const ProductDettails = () => {
    document.title = "ema-john/details"
    const {productkey} = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
    fetch('http://localhost:5000/product/'+productkey)
    .then(res => res.json())
    .then(data => setProduct(data))
    }, [productkey]);
    
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