import React from "react";
import slide1 from "../Images/place1.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper";
// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const PlaceSection = () => {
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
            //   pagination={{
            //     clickable: true,
            //   }}
            navigation={true}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="image-container">
                <img className="slideImage" src={slide1} alt="SLIDES" />
                <h1 className="slideText">Text</h1>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="image-container">
                <img className="slideImage" src={slide1} alt="SLIDES" />
                <h1 className="slideText">Text</h1>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="image-container">
                <img className="slideImage" src={slide1} alt="SLIDES" />
                <h1 className="slideText">Text</h1>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="image-container">
                <img className="slideImage" src={slide1} alt="SLIDES" />
                <h1 className="slideText">Text</h1>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="image-container">
                <img className="slideImage" src={slide1} alt="SLIDES" />
                <h1 className="slideText">Text</h1>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="image-container">
                <img className="slideImage" src={slide1} alt="SLIDES" />
                <h1 className="slideText">Text</h1>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default PlaceSection;
