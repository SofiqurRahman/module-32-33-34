import React from 'react';
import './Cart.css';
const Cart = (props) => {
  const cart=props.cart;
  console.log(cart);
  // const total=cart.reduce((total,prd)=>total+prd.price,0);
  let total=0;
  let grandTotal=0;
  for (let i = 0; i < cart.length; i++) {
    const product = cart[i];
    total=product.price*1;
    grandTotal=grandTotal+product.price*1;
  }
  const allTotal=grandTotal;
  return (
    <div className="cartPrice">
      <h4>Order Summary</h4>
      <p>Course Ordered: {cart.length}</p>
      <p>Course Price: ${total}</p>
      <p>Total Course Price: ${allTotal}</p>
    </div>
  );
};

export default Cart;