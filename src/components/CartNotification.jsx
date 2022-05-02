import React from "react";
import "../styles/CartNotification.css";
import FlipMove from "react-flip-move";
import { TiDeleteOutline } from "react-icons/ti";
import { useStateValue } from "../data/StateProvider";

const CartNotification = ({ image, id, title }) => {
  const [{ cart, noti }, dispatch] = useStateValue();

  const removeNoti = () => {
    dispatch({
      type: "REMOVE_FROM_NOTI",

      id: id,
    });
  };
  return (
    
    <div className="cartNotification">
      <div className="noti__img-wrapper">
        <img className="notification__img" src={image} alt="" />
      </div>

      <p className="notification__title">{title} has been added to cart!</p>
      <div className="delete__noti-wrapper">
        <p className="delete-noti" onClick={removeNoti} >x</p>
      </div>
      
    </div>
  );
};

export default CartNotification;
