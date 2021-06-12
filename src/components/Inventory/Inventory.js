import React from 'react';
import { useState } from 'react';


const Inventory = () => {
    // problem asa mama 
    const [products , setProducts] = useState({
        name: '',
        price: '',
        quantity: ''
    })

    const handleProductName = (product) => {
       const newProduct = { ...products };
       newProduct.name = product;
       setProducts(newProduct);
    };
    
    const handleProductPrice = (product) => {
        const newProduct = { ...products };
        newProduct.price = product;
        setProducts(newProduct);
    }
    
       console.log('products', products)
    const handleProductQuantity = (product) => {
       
    }
     
    const handleAddProducts = () => {
        const addPd = { ...products};
        fetch('https://evening-ravine-87925.herokuapp.com/addProducts', {
            method: 'POST',
            headers:{ 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addPd)
        });
    }
    
    return (
      <div>
        <form action="/addProducts" method="post"></form>
        <p>
          <span>Name: </span>
          <input
            type="text"
            value={products.name}
            onChange={handleProductName}
          />
        </p>
        <p>
          <span>price: </span>
          <input
            type="text"
            value={products.price}
            onChange={handleProductPrice}
          />
        </p>
        <p>
          <span>Quantity: </span>
          <input
            type="text"
            value={products.quantity}
            onChange={handleProductQuantity}
          />
        </p>
        {/* <p><span>image-upload</span><input type="file" /></p> */}
        <button onClick={handleAddProducts}>add products</button>
      </div>
    );

};

export default Inventory;