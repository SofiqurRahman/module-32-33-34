import React, { useState } from 'react';
import onlineCourseFakeData from '../../onlineCourseFakeData/onlineCourseFakeData';
import './Shop.css';
import Course from '../Course/Course';
import Cart from '../Cart/Cart';
const Shop = () => {
  const first15=onlineCourseFakeData.slice(0,15);
  const [products,setProducts]=useState(first15);
  const [cart,setCart]=useState([]);
  const handleAddProduct=(product)=>{
    const newCart=[...cart,product];
    setCart(newCart);
  }
  return (
    <div className="shop-container">
      <div className="product-container">
        {
            products.map(pd=>
            <Course handleAddProduct={handleAddProduct} product={pd}>

            </Course>)
        }
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;