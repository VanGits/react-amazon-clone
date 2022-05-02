import React, { useState } from "react";
import "../styles/Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../data/StateProvider";
import { getCartTotal } from "../data/Reducer";

const Subtotal = () => {
  const [{ cart }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({cart.length} {cart.length > 1 ? "items" : "item"}):
              <strong className="subtotal__value">{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        fixedDecimalScale= {true}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button className="checkout-btn">Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
