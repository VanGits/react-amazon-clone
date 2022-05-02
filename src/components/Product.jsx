import React, { useEffect, useState } from "react";
import { useStateValue } from "../data/StateProvider";
import "../styles/Product.css";
import { RiStarFill, RiStarHalfFill } from "react-icons/ri";




const Product = ({ id, title, image, price, rating, category, description, ratingCount }) => {
  const [{ cart, noti }, dispatch] = useStateValue();

 

  

 
   
    
  

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item:{
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
    },
    });
  };
  const addToNoti = () => {
    dispatch({
      type: "ADD_TO_NOTI",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  const addAll = () => {
    addToNoti();

    console.log(addToNoti);
    addToCart();
  };
  return (
    <div className= "product" >
      <small className="product__category">{category}</small>
      <div className="product__info"> 
        
        <p className="product__title">{title}</p>
        <p className="product__price">
          <small>$</small>
         
          <strong>{price.toFixed(2)}</strong>
          <small className="product__description">{description}</small>
        </p>
         <div className="product__rating">
          {
            new Array (Math.floor(rating)).fill(0).map((_, index) => <RiStarFill className="stars"/>)
          }
          {
            !Number.isInteger(rating) && <RiStarHalfFill className="stars" />
          }
          <p className="product__rating-count">{ratingCount}</p>
        </div> 
      </div>

      <img src={image} alt="" />

      <button onClick={addAll}>Add to Cart</button>
    </div>
    
  );
};

export default Product;
