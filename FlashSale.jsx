import React, { useState } from "react";
import Modal from "../common/Modal";
import { cat } from "../data/Data";
import { products } from "../data/Data";

const FlashSale = () => {
  const [isModalOpen, setIsModalOpen] = useState(null);
  const [activeTab, setActiveTab] = useState("all"); // tab values: all, skin, Meakup

  const handleOpen = (productId) => {
    setIsModalOpen(productId);
  };
  const handleClose = () => {
    setIsModalOpen(null);
  };

  // فلترة المنتجات حسب التاب
  const getFilteredProducts = () => {
    if (activeTab === "all") return products;
    if (activeTab === "skin")
      return products.filter((p) => p.category === "Skincare");
    if (activeTab === "Meakup")
      return products.filter((p) => p.category === "Meakup");
    return products;
  };

  const filteredProducts = getFilteredProducts();

  // إظهار الكروت مع التعامل مع فتح المودال بالـ id
  const renderCards = () => {
    return filteredProducts.map((val) => (
      <div key={val.id} className="col-md-3 mb-4">
        <div
          className="card position-relative"
          style={{
            cursor: "pointer",
            backgroundColor: "#f5f5f5",
            padding: "10px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            borderRadius: "8px",
            border: "1px solid #ddd",
            transition: "transform 0.2s ease",
          }}
          onClick={() => handleOpen(val.id)}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.06)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <div
            style={{
              position: "absolute",
              top: "10px",
              left: "10px",
              backgroundColor: "#333",
              color: "white",
              borderRadius: "50%",
              width: "55px",
              height: "55px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "0.8rem",
              fontWeight: "600",
              boxShadow: "0 0 6px rgba(0,0,0,0.3)",
              userSelect: "none",
            }}
            title={val.tag}
          >
            {val.tag}
          </div>

          <img
            src={val.img}
            className="card-img-top"
            alt={`product-${val.id}`}
            style={{ height: "250px", objectFit: "cover", borderRadius: "6px" }}
          />
        </div>
        <b
          className="fw-bold w-50 mt-3 me-1"
          style={{
            color: "grey",
            padding: "6px 12px",
            display: "inline-block",
            fontSize: "1rem",
          }}
        >
          Name: {val.title}
        </b>
        <button 
          className="btn btn-outline-dark mt-2 w-100" 
          onClick={() => handleOpen(val.id)}
        >
          {val.btn}
        </button>
      </div>
    ));
  };

  // المنتج المفتوح في المودال حسب id
  const modalProduct = products.find((product) => product.id === isModalOpen);

  return (
    <div
      className="port "
      id="works"
      style={{ backgroundColor: "#fafafa", padding: "40px 0" }}
    >
      <div className="container text-center">
        {/* التابات */}
        <ul className="nav nav-tabs py-3 d-flex justify-content-center" id="myTab" role="tablist">
          {[
            { key: "all", label: "All Products" },
            { key: "skin", label: "Skin Care" },
            { key: "Meakup", label: "Meakup" },
          ].map((tab) => (
            <li key={tab.key} className="nav-item ms-3 me-3" role="presentation">
              <button
                className={`btn btn-light ${activeTab === tab.key ? "active" : ""}`}
                type="button"
                style={{ minWidth: "120px" }}
                onClick={() => {
                  setActiveTab(tab.key);
                  setIsModalOpen(null);
                }}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
        {/* عرض الكروت */}
        <div className="tab-content mt-4">
          <div className="row gx-4 gy-4">{renderCards()}</div>
        </div>

      </div>
            <Modal
        isModalOpen={isModalOpen !== null}
        data={products.find((feature) => feature.id === isModalOpen)}
        handleClose={handleClose}
      />
    </div>
  );
};

export default FlashSale;




