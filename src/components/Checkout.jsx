import React, { forwardRef } from "react";
import CurrencyFormat from "react-currency-format";
import { getCartTotal } from "../data/Reducer";
import { useStateValue } from "../data/StateProvider";
import "../styles/Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import emptyCartImg from "../assets/emptycart.svg";
import FlipMove from "react-flip-move";
import Product from "./Product";
import Itemrec from "./ItemRec";
import { Recommend } from "@mui/icons-material";
import Recommended from "./Recommended";

const Checkout = ({ image }) => {
  const [{ cart }, dispatch] = useStateValue();

  const removeAllItems = () => {
    dispatch({
      type: "REMOVE_ALL_ITEMS",
    });
  };
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/onsite/Apr18/PeX_1500x200._CB1198675309_.jpg"
          alt=""
          className="checkout__ad"
        />
        <div className="checkout__area">
          <h2 className="checkout__title">
            {cart.length <= 0 ? "Your Amazon Cart is empty." : "Shopping Cart"}
          </h2>
          <p
            href=""
            className={cart.length <= 0 ? "" : "link-btn"}
            onClick={removeAllItems}
          >
            {cart.length <= 0 ? (
              <div className="empty__cart-state">
                <p>
                  Your Shopping Cart lives to serve. Give it purpose — fill it
                  with groceries, clothing, household supplies, electronics, and
                  more.
                </p>

                <img src={emptyCartImg} alt="" className="empty__cart-img" />
              </div>
            ) : (
              "Delete all items"
            )}
          </p>

          <p className="subtotal__subtitle">
            {cart.length <= 0 ? null : "Price"}
          </p>

          {cart.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}

          <p className="subtotal__checkout">
            <CurrencyFormat
              renderText={(value) => (
                <>
                  {cart.length <= 0 ? (
                    ""
                  ) : (
                    <p>
                      Subtotal ({cart.length}{" "}
                      {cart.length > 1 ? "items" : "item"}
                      ):
                      <strong className="subtotal__value">{value}</strong>
                    </p>
                  )}
                </>
              )}
              decimalScale={2}
              fixedDecimalScale={true}
              value={getCartTotal(cart)}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
          </p>
        </div>
      </div>
      <div className="right__section">
        <div className="checkout__right">
          {cart.length <= 0 ? "" : <Subtotal />}
        </div>
        <Recommended/>
      </div>
    </div>
  );
};

export default Checkout;
