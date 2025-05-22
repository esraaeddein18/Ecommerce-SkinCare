import React from "react";
import img3 from "./flash_sale/b3.avif";
import img5 from "./flash_sale/b1.jpg";
import img6 from "./flash_sale/b4.avif";

const Banner = () => {
  return (
    <div
      id="bannerCarousel"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
      data-bs-interval="5000"
    >
      <div className="carousel-inner">
        {[img3,img5 ,img6 ].map((image, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <div className="position-relative" style={{ height: "120vh" }}>
              <img
                src={image}
                className="d-block w-100 h-100"
                alt={`banner-${index}`}
                style={{
                  objectFit: "cover",
                  filter: "brightness(70%)",
                }}
              />
              <div
                className="carousel-caption d-flex flex-column justify-content-start align-items-start h-100"
                style={{ top: "39%", left: "10%", bottom: "unset", textAlign: "start" }}
              >
                <h1
                  className="text-white fw-bold"
                  style={{
                    fontSize: "clamp(1.5rem, 3vw, 3rem)",
                    lineHeight: 1,
animation: "fadeIn 2s ease-in-out",
                  }}
                >
                  Everything about 
                  skin beauty,   <br />  body care & hair treatment
                </h1>
                <p className="text-white fw-semibold fs-5">Inspired by both Egyptian rituals and Korean skincare excellence.

</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Custom styled controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#bannerCarousel"
        data-bs-slide="prev"
        style={{
          top: "50%",
          transform: "translateY(-50%)",
          left: "20px",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          border: "1px solid rgba(255, 255, 255, 0.4)",
          boxShadow: "0 0 10px rgba(0,0,0,0.6)",
          cursor: "pointer",
        }}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#bannerCarousel"
        data-bs-slide="next"
        style={{
          top: "50%",
          transform: "translateY(-50%)",
          right: "20px",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          border: "1px solid rgba(255, 255, 255, 0.4)",
          boxShadow: "0 0 10px rgba(0,0,0,0.6)",
          cursor: "pointer",
        }}
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>

      <style>{`
@keyframes fadeIn {
  0% { opacity: 0; transform: translateX(-20px); }
  100% { opacity: 1; transform: translateX(0); }
}


      `}</style>
    </div>
  );
};

export default Banner;
