import React, { forwardRef, useEffect } from "react";
import { useStateValue } from "../data/StateProvider";
import CartNotification from "./CartNotification";
import FlipMove from "react-flip-move";

const Noty = ({ id, notif }) => {
  const [{ noti }, dispatch] = useStateValue();

  useEffect(() => {
    let notification = setInterval(() => {
      if (noti.length > 0) {
        console.log(id);
        dispatch({
          type: "REMOVE_FROM_NOTI_AUTO",
          notif: notif,
        });
      }
    }, 4000);
    return () => {
      clearInterval(notification);
    };
  });

  const AnimationNoty = forwardRef((item, ref) => (
    <div ref={ref}>
      <CartNotification
        title={item.title}
        id={item.id}
        price={item.price}
        image={item.image}
        rating={item.rating}
      />
    </div>
  ));

  return (
    <div className="noty">
      <div className="cart__notification">
        <FlipMove appearAnimation="fade" leaveAnimation="fade">
          {noti.map((item) => (
            <AnimationNoty
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </FlipMove>
      </div>
    </div>
  );
};

export default Noty;
