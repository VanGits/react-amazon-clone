import React from "react";
import "../styles/ItemRec.css";
import { RiStarFill, RiStarHalfFill } from "react-icons/ri";
import { useStateValue } from "../data/StateProvider";
const Itemrec = ({
  id,
  title,
  image,
  price,
  rating,
  category,
  description,
  ratingCount,
}) => {
  const [{ cart }, dispatch] = useStateValue();
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

    addToCart();
  };
  return (
    <div className="itemrec">
        <div className="recommended__image-wrapper">
            <img className= "recommended__image"src={image} alt="" />
        </div>
   
      <div className="item__content">
        <small className="recommended__title">{title}</small>
        <div className="recommended__ratings">
          {new Array(Math.floor(rating)).fill(0).map((_, index) => (
            <RiStarFill className="stars" />
          ))}
          {!Number.isInteger(rating) && <RiStarHalfFill className="stars" />}
          <p className="product__rating-count">{ratingCount}</p>
        </div>
        <p className="recommended__price">${price.toFixed(2)}</p>
        <button onClick={addAll}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Itemrec;
