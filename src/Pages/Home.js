import React from "react";
import BlogSection from "../Components/BlogSection";
import Header from "../Components/Header";
import HeroSection from "../Components/HeroSection";
import PlaceSection from "../Components/PlaceSection";
import TripBlogSection from "../Components/TripBlogSection";

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <PlaceSection />
      <TripBlogSection />
      <BlogSection />
    </>
  );
};

export default Home;
