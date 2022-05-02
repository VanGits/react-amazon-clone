import React, { useEffect, useState } from "react";
import { useStateValue } from "../data/StateProvider";
import "../styles/Recommended.css";
import axios from "axios";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Itemrec from "./ItemRec";

const Recommended = ({ notif, id, title, image, price  }) => {
  const [{ cart }, dispatch] = useStateValue();

  const url = `https://fakestoreapi.com/products`;
  const [filter, setFilter] = useState(null);


  const cartLoop = (idCart) => {
    let answer = true;
    let cartID = 0;
    let cartIndex = 0
    for (let i = 0; i < cart.length; i++) {
      if (idCart === cart[i].id){
        answer = false;
      }                            
    }
    return answer;
  };
  console.log("NICE", cartLoop());

  useEffect(() => {
    axios.get(url).then((response) => {
      setFilter(response.data);
    });
  }, []);

  let recommendedData = null;
  if (filter) {
    console.log("srexy")
    let cartID = 0;
    let cartIndex = 0
    console.log(cart.length)
    for (let i = 0; i < cart.length; i++) {
      cartIndex = i
      console.log("haha",cart[i].id)
      cartID = cart[i].id;
      recommendedData = filter
      .filter((item) => cartLoop(item.id))
      .slice(0, 5)
      .map((product) => (
        <Itemrec
          title={product.title}
          price={product.price}
          image={product.image}
          description={product.description}
          category={product.category}
          rating={product.rating.rate}
          ratingCount={product.rating.count}
          id={product.id}
          notif={notif}
        />                                      
      ))}
    // recommendedData = filter
    //   .filter((item) => item.id !== cartLoop())
    //   .slice(10, 15)
    //   .map((product) => (
    //     <Itemrec
    //       title={product.title}
    //       price={product.price}
    //       image={product.image}
    //       description={product.description}
    //       category={product.category}
    //       rating={product.rating.rate}
    //       ratingCount={product.rating.count}
    //       id={product.id}
    //       notif={notif}
    //     />
      
  } else {
    recommendedData = (
      <>
        <div className="itemrec">
          <AiOutlineLoading3Quarters className="product__loading recommended__loading" />
        </div>
        <div className="itemrec">
          <AiOutlineLoading3Quarters className="product__loading recommended__loading" />
        </div>
        <div className="itemrec">
          <AiOutlineLoading3Quarters className="product__loading recommended__loading" />
        </div>
        <div className="itemrec">
          <AiOutlineLoading3Quarters className="product__loading recommended__loading" />
        </div>
        <div className="itemrec">
          <AiOutlineLoading3Quarters className="product__loading recommended__loading" />
        </div>
      </>
    );
  }

  return (
    <div className="recommended">
      {cart.length !== 0 ? <h5>Other Recommended Items to Buy</h5> : <h5>You must add items to cart</h5>}
      <div className="recommended__items">{recommendedData}</div>
    </div>
  );
};

export default Recommended;
