import React, { forwardRef, useEffect, useState } from "react";
import "../styles/Home.css";
import Product from "./Product";
import { headerItems, homeImages } from "../utilities/ProductsData";
import Slider from "./Slider";
import axios from "axios";
import { useParams } from "react-router-dom";
import * as ReactBootStrap from "react-bootstrap";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Home = ({ notif }) => {
  const url = `https://fakestoreapi.com/products`;
  const [filter, setFilter] = useState(null);
  let productData = null;

  useEffect(() => {
    axios.get(url).then((response) => {
      setFilter(response.data);
      console.log(filter);
    });
  }, []);

  if (filter) {
    productData = (
      <div className="home__products">
        <div className="home__row">
          {filter.slice(10, 12).map((product) => (
            <Product
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
        </div>
        <div className="home__row">
          {filter.slice(5, 8).map((product) => (
            <Product
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
        </div>
        <div className="home__row">
          {filter.slice(13, 14).map((product) => (
            <Product
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
        </div>
      </div>
    );
  } else {
    productData = (
      <div className="home__products">
        <div className="home__row">
          <div className="product">
            <AiOutlineLoading3Quarters className="product__loading" />
          </div>
          <div className="product">
            <AiOutlineLoading3Quarters className="product__loading" />
          </div>
        </div>
        <div className="home__row">
          <div className="product">
            <AiOutlineLoading3Quarters className="product__loading" />
          </div>
          <div className="product">
            <AiOutlineLoading3Quarters className="product__loading" />
          </div>
          <div className="product">
            <AiOutlineLoading3Quarters className="product__loading" />
          </div>
        </div>
        <div className="home__row">
          <div className="product">
            <AiOutlineLoading3Quarters className="product__loading" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="item__container">
        {headerItems &&
          headerItems.map((item, index) => (
            <p className="item click">{item}</p>
          ))}
      </div>
      <div className="home">
        <div className="home__container">
          <div className="home__image">
            <Slider images={homeImages} />
          </div>
          {productData}
        </div>
      </div>
    </>
  );
};



export default Home;
