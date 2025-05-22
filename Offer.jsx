import React from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from './image.png';
import img2 from './img.png';
import img3 from './flash_sale/Group.png';
import img4 from './flash_sale/Vector.png';
import img5 from './flash_sale/Vector (1).png';
import img6 from './flash_sale/Group (1).png';

const Offer = () => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate("/about");
  };

  return (
    <div className="container py-4">
      <h1 className="fw-bolder fs-3 text-center mb-2">Our Values</h1>
      <p className="text-center mb-4 lh-sm">Putting your health and beauty first</p>

      <div className="row justify-content-center gap-3 gap-md-0 mb-5">
        {[
          { img: img6, text: "100% natural", width: "40px" },
          { img: img5, text: "0% alcohol", width: "37px" },
          { img: img3, text: "Vegan Suitable", width: "33px" },
          { img: img4, text: "Sustainability", width: "40px" },
        ].map((item, index) => (
         <div
  className="col-10 col-sm-6 col-md-3 d-flex flex-column align-items-center justify-content-center mb-4"
  key={index}
>
  <div
    className="icon-container bg-white shadow-sm rounded-5 d-flex align-items-center justify-content-center mb-2"
    style={{ width: "65px", height: "65px" }}
  >
    <img
      src={item.img}
      alt=""
      style={{
        width: item.width,
        border: "2px solid white"
      }}
    />
  </div>
  <p className="text-black text-center mb-0 small fw-semibold">{item.text}</p>
</div>

        ))}
      </div>

      <div className="row gx-5">
        <div className="col-12 col-md-6 position-relative overflow-hidden custom-image-container lifted py-4">
          <img
            src={img2}
            alt="Image 1"
            className="img-fluid w-100 object-fit-cover darken-image transition-scale"
            style={{ minHeight: '408px', maxHeight: '410px' }}
          />
          <button
            className="position-absolute text-white fs-5 px-1 py-2 custom-overlay-btn w-25 rounded-3"
            style={{
              backgroundColor: "#000000",
              bottom: "11%",
              left: "22%",
              transform: "translateX(-50%)",
              border: "none",
            }}
            onClick={handleLearnMore}
          >
            Learn More
          </button>
        </div>

        <div className="col-12 col-md-6 position-relative overflow-hidden custom-image-container lowered py-4">
          <img
            src={img1}
            alt="Image 2"
            className="img-fluid w-100 object-fit-cover darken-image transition-scale"
            style={{ minHeight: '370px', maxHeight: '400px' }}
          />
          <button
            className="position-absolute text-white fs-5 px-1 py-2 custom-overlay-btn w-25 rounded-3"
            style={{
              backgroundColor: "#000000",
              bottom: "11%",
              left: "22%",
              transform: "translateX(-50%)",
              border: "none",
            }}
            onClick={handleLearnMore}
          >
            Learn More
          </button>
        </div>
      </div>

      <style>{`
        p {
          font-weight: 300;
          font-size: 14px;
          letter-spacing: 0.05em;
          color: rgb(101, 101, 101);
        }
        .icon-container {
          background-color: rgba(155, 154, 154, 0.08);
        }
        .custom-image-container {
          height: 100%;
        }
        .darken-image {
          filter: brightness(0.8);
        }
        .transition-scale {
          transition: transform 0.5s ease;
        }
        .custom-image-container:hover .transition-scale {
          transform: scale(1.09);
        }

        @media (min-width: 768px) {
          .lifted {
            margin-top: -40px;
          }
          .lowered {
            margin-top: 40px;
          }
        }

        @media (max-width: 768px) {
          .lifted,
          .lowered {
            margin-top: 1rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Offer;






