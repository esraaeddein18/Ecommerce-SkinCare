import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";


const About = () => {
    const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 2500); 
    return () => clearTimeout(delay);
  }, []);

  if (loading) return <Loader />;

  return (
  <div className="bg-light py-4 px-3 px-md-4" style={{ minHeight: '60vh' }}>
  <div className="container mt-5">
    <h1 className="fw-bolder mb-4 text-center fs-3">About Us</h1>

    <div className="mx-auto" style={{ maxWidth: '800px', lineHeight: '1.3',fontSize:'14px' }}>
      <p className="mb-4 text-dark ln-sm">
        <strong className="text-dark fs-6">1- In a world</strong> brimming with beauty products and trends, there’s an undeniable charm in returning to natural methods to enhance one’s beauty. Nature provides us with a plethora of ingredients that can transform the way we care for our skin, hair, and overall well-being.
      </p>

      <p className="text-dark mb-4">
        <strong className="fs-6">2- Doctors agree</strong> that embracing organic products can have lasting positive effects on your health.By minimizing exposure to harmful chemicals and enhancing your intake of natural nutrients, you support not only your physical well-being but also your mental and emotional health.
      </p>

      <p className="text-dark mb-0">
        <strong className="fs-6">3- Caring</strong> for your hair with natural products can promote healthier growth and shine. Aloe vera gel and coconut milk are renowned for their moisturizing and nourishing properties.
      </p>
    </div>
  </div>
</div>

  );
};

export default About