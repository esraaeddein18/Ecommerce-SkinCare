import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { products } from "../data/Data";
import { BiCart } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Modal from "../common/Modal";

const BestSeller = () => {
  const NextArrow = ({ onClick }) => (
    <div className="custom-arrow next" onClick={onClick}>
      <FaArrowRight size={30} />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div className="custom-arrow prev" onClick={onClick}>
      <FaArrowLeft size={30} />
    </div>
  );

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 576,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const [isModalOpen, setIsModalOpen] = useState(null);

  const handleOpen = (productId) => {
    setIsModalOpen(productId);
  };
  const handleClose = () => {
    setIsModalOpen(null);
  };

  return (
    <div className="container py-2">
      <h1 className="fw-bolder text-center fs-5 mt-5">Explore Our Products</h1>
      <p className="mb-5 text-center fs-6">
        Discover our premium collection of all-natural flavors, essential oils,
        <br /> and cosmetics, meticulously crafted to
      </p>
      <Slider {...settings}>
        {products.map((val) => (
          <div key={val.id} className="px-2 position-relative image-wrapper">
            <div className="card h-100 shadow-sm product-card">
              <div
                style={{ height: "300px", overflow: "hidden", cursor: "pointer", position: "relative" }}
                onClick={() => handleOpen(val.id)}
              >
<img
  src={val.img}
  className="card-img-top object-fit-cover product-image"
  alt="product"
  style={{
    height: "100%",
    width: "100%",
    objectFit: "cover",
    filter: "brightness(0.8)", // أغمق من العادي
    transition: "filter 0.3s ease, transform 0.5s ease",
  }}
/>
                {/* التاج دائري ومدور وخلفيته سوداء */}
                {val.tag && (
                  <div className="tag-badge-circle">
                    <span className="tag-text">{val.tag}</span>
                  </div>
                )}
                {/* القلب دائري وخلفيته سوداء */}
                <div className="heart-circle">
                  <FaHeart className="heart-icon text-white" />
                </div>
              </div>

              <div className="card-footer bg-light d-flex justify-content-center gap-2 py-3">
                <button
                  className="btn btn-link text-black p-0 fs-4"
                  aria-label="Add to cart"
                  style={{ textDecoration: "none" }}
                >
                  <BiCart />
                </button>
                <button
                  className="btn text-black fw-semibold border rounded"
                  onClick={() => handleOpen(val.id)}
                >
                  {val.btn}
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Modal */}
      <Modal
        isModalOpen={isModalOpen !== null}
        data={products.find((feature) => feature.id === isModalOpen)}
        handleClose={handleClose}
      />

      <style>{`
        .custom-arrow {
          position: absolute;
          top: 40%;
          z-index: 2;
          background: white;
          border-radius: 50%;
          padding: 8px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
          cursor: pointer;
          transition: background 0.3s ease;
        }
        .custom-arrow:hover {
          background: #eee;
        }
        .next {
          right: -50px;
        }
        .prev {
          left: -50px;
        }

        .slick-slide > div {
          display: flex;
          height: 100%;
          flex-direction: column;
        }

        /* الصورة بتكبر وبتغمق لما hover */
        .image-wrapper:hover .product-image {
          filter: brightness(0.7);
          transform: scale(1.05);
          transition: filter 0.3s ease, transform 0.3s ease;
          box-shadow: 0 4px 15px rgba(0,0,0,0.3);
        }

/* تصميم التاج الدائري */
.tag-badge-circle {
  position: absolute;
  top: 10px;
  left: 10px;
  width: 55px;
  height: 55px;
  background-color: black;
  border-radius: 50%;
  box-shadow: 0 0 6px rgba(0,0,0,0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.tag-text {
  color: white;
  user-select: none;
  text-align: center;text-white;
  font-size: 0.77rem;
  line-height: 1rem;              fontWeight: "800",

}
          /* أخفي القلب بشكل افتراضي */
.heart-circle {
  display: none;
  position: absolute;
  top: 15px;
  right: 15px;
  width: 35px;
  height: 35px;
  background-color: black;
  border-radius: 50%;
  box-shadow: 0 0 8px 2px rgba(255, 255, 255, 0.6);
  justify-content: center;
  align-items: center;
  z-index: 20;
  cursor: pointer;
}

/* أظهر القلب لما يكون هناك hover على image-wrapper */
.image-wrapper:hover .heart-circle {
  display: flex;
}

      `}</style>
    </div>
  );
};

export default BestSeller;
