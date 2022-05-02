import React from "react";
import { useStateValue } from "../data/StateProvider";
import "../styles/CheckoutProduct.css";
import FlipMove from "react-flip-move";
const CheckoutProduct = ({ id, image, title, price, rating }) => {
    const [{ cart }, dispatch] = useStateValue();
    const removeFromCart = () => {
      
        dispatch({
            type: "REMOVE_FROM_CART",
            id: id,
        })
       
    }
  return (
    <div className="checkoutProduct__wrapper">
      <div className="checkoutProduct">
        <div className="checkoutProduct__img-wrapper">
          <img className="checkoutProduct__img" src={image} alt="" />
        </div>

        <div className="checkoutProduct__info">
          
          <p className="checkoutProduct__title">{title}</p>
          <p className="checkoutProduct__inStock">In Stock</p>
          <p className="checkoutProduct__shipping">
            Eligible for FREE Shipping &{" "}
            <a className="link-btn">FREE Returns</a>
          </p>
          <div className="checkoutProduct__gift">
            <input type="checkbox" />
            <p className="checkoutProduct__gift-text">This is a gift</p>
          </div>
         
          <button onClick = {removeFromCart}className="delete-btn">Delete</button>
          
        </div>
        
      </div>
      <p className="checkoutProduct__price">${price.toFixed(2)}</p>
      
    </div>
  );
};

export default CheckoutProduct;
