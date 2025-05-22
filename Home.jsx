import React from "react";
import {
  Banner,
  BestSeller,
  FlashSale,
  Offer,
  Contact,
} from "./index";

const Home = () => {
  return (
    <div>
      <Banner/>

      <BestSeller/>
      <FlashSale/>
      <Offer/>
      <Contact/>
    </div>
  );
};

export default Home;
