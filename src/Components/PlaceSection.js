import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperCore, { Pagination, Navigation } from "swiper";
SwiperCore.use([Pagination, Navigation]);

const PlaceSection = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("https://ancient-scrubland-54558.herokuapp.com/category")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  return (
    <div className="my-5 custom-container">
      <div className="placeSectionInner">
        <div className="back-color">
          <h1 className="display-5 fw-bolder">Explore The Mysterious World</h1>
          <p className="py-3 text-secondary">
            There's more world out there that you don't know about. Culture is
            <br /> abundant and it is imperative that you experience.
          </p>
        </div>
        <div className="slider">
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            slidesPerGroup={2}
            loop={true}
            loopFillGroupWithBlank={true}
            navigation={true}
            className="mySwiper"
          >
            {category.map((i) => (
              <SwiperSlide>
                <div className="image-container">
                  <img className="slideImage" src={i.Banner} alt="SLIDES" />
                  <h2 className="slideText">{i.Title}</h2>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default PlaceSection;
