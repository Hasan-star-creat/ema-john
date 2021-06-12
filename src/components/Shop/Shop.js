import React, { useEffect, useState } from "react";
import "./Shop.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import {
  addToDatabaseCart,
  getDatabaseCart,
} from "../../utilities/databaseManager";
import { Link } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  document.title = "shop";
     
  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  
  useEffect(() => {
    const saveCart = getDatabaseCart();
    const productKeys = Object.keys(saveCart);
    if(products.length > 0){
      const priewsCart = productKeys.map(extingkey => {
        const product = products.find(pd => pd.key === extingkey)
        product.quantity = saveCart[extingkey];
        return product;
      })
      setCart(priewsCart)
    }
  }, [products]);

  const handleAddToCart = (product) => {
    const toBeAddedKey = product.key;
    //    console.log(product);
    const sameProduct = cart.find((pd) => pd.key === toBeAddedKey);
    let count = 1;
    let newCart;
    if (sameProduct) {
      console.log(sameProduct);
      count = sameProduct.quantity + 1;
      sameProduct.quantity = count;
      const others = cart.filter((pd) => pd.key !== toBeAddedKey);
      newCart = [...others, sameProduct];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }
    setCart(newCart);
    addToDatabaseCart(product.key, count);
  };
  return (
    <div className="twin-container">
      <div className="product-container">
        {products.length === 0 && <p>loading.....</p>}
        {products.map((product) => (
          <Product
            product={product}
            cardAddProduct={true}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <Link to="/review">
            <button className="main-button">Review Order</button>{" "}
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
