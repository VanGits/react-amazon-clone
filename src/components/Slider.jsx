import React, { useState, useEffect } from "react";
import "../styles/Slider.css";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { homeImages } from "../utilities/ProductsData";
const Slider = ({ images }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = images.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, images]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 10000);

    return () => {
      clearInterval(slider);
    };
  }, [index]);
  return (
    <div className="slider">
      <div className="slider__center">
        {homeImages.map((image, indexImage) => {
          let position = "nextSlide";
          if (indexImage === index) {
            position = "activeSlide";
          }
          if (
            indexImage === index - 1 ||
            (index === 0 && indexImage === images)
          ) {
            position = "lastSlide";
          }
          return (
            <article className={position} key={indexImage}>
              <img src={image} alt="" className="banner__img" />
            </article>
          );
        })}
        <p className="prev" onClick={() => setIndex(index - 1)}>
          <GrPrevious />
        </p>
        <p className="next" onClick={() => setIndex(index + 1)}>
          <GrNext />
        </p>
      </div>
    </div>
  );
};

export default Slider;
