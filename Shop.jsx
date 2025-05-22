import React, { useState } from "react";
import { BiCart } from "react-icons/bi";
import { products } from "../data/Data";
import Modal from "../common/Modal";

const Shop = () => {
  const [isModalOpen, setIsModalOpen] = useState(null);
  const handleOpen = (productId) => {
    setIsModalOpen(productId);
  };
  const handleClose = () => {
    setIsModalOpen(null);
  };

  const [filters, setFilters] = useState({
    categories: [],
    brands: [],
    priceRange: [0, 1000], // Initial price range
  });

  const categoryList = Array.from(
    new Set(products.map((product) => product.category))
  );

  const brandList = Array.from(
    new Set(products.map((product) => product.brand))
  );

  const filteredProducts = products.filter((product) => {
    if (
      filters.categories.length > 0 &&
      !filters.categories.includes(product.category)
    )
      return false;
    if (filters.brands.length > 0 && !filters.brands.includes(product.brand))
      return false;
    const price = parseFloat(product.price);
    if (
      price < filters.priceRange[0] || // Check if price is below minimum
      price > filters.priceRange[1] // Check if price is above maximum
    )
      return false;
    return true;
  });

  const handleCheckboxChange = (filterType, value) => {
    const updatedFilters = [...filters[filterType]];
    const index = updatedFilters.indexOf(value);
    if (index === -1) {
      updatedFilters.push(value);
    } else {
      updatedFilters.splice(index, 1);
    }
    setFilters({ ...filters, [filterType]: updatedFilters });
  };

  return (
    <div className="container py-5">
      <div className="row g-4 py-5 mt-4">
        {/* فلتر */}
        <aside className="col-lg-2 col-md-1">
          <div className="bg-white shadow-sm p-4 rounded">
            <h1 className="mb-4 fw-bold">Filter</h1>

            {/* Categories */}
            <div className="mb-4">
              <h2 className="h5 mb-3">Categories</h2>
              {categoryList.map((category, index) => (
                <div className="form-check" key={index}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={`category-${index}`}
                    checked={filters.categories.includes(category)}
                    onChange={() => handleCheckboxChange("categories", category)}
                  />
                  <label
                    className="form-check-label"
                    htmlFor={`category-${index}`}
                  >
                    {category}
                  </label>
                </div>
              ))}
            </div>

            {/* Brands */}
            <div>
              <h2 className="h5 mb-3">Brands</h2>
              {brandList.map((products, index) => (
                <div className="form-check" key={index}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={`brand-${index}`}
                    checked={filters.brands.includes(products)}
                    onChange={() => handleCheckboxChange("brands", products)}
                  />
                  <label className="form-check-label" htmlFor={`brand-${index}`}>
                    {products}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* المنتجات */}
        <section className="col-lg-10 col-md-9">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
            {filteredProducts.map((val, index) => (
              <div className="col" key={index}>
                <div className="card h-100 shadow-sm border rounded">
        <div
          className="card position-relative"
          style={{
            cursor: "pointer",
            backgroundColor: "#f5f5f5",  // خلفية رمادي فاتح
            padding: "10px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)", // ظل خفيف
            borderRadius: "8px",
            border: "1px solid #ddd",  // بوردير خفيف
            transition: "transform 0.2s ease",
          }}
          onClick={() => handleOpen(index)}
          onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.06)")}
          onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
        >                              
        {/* <div title={val.tag}>{val.tag}</div> */}
                    <img
                      src={val.img}
                      alt={val.short_description}
                      className="card-img-top"
                      style={{ height: "250px", objectFit: "cover" }}
                    />
                   {/* التاج دائري ومدور وخلفيته سوداء */}
                {val.tag && (
                  <div className="tag-badge-circle">
                    <span className="tag-text">{val.tag}</span>
                  </div>
                )}
                  </div>
                  <div className="card-body text-center d-flex flex-column">
                    <p className="card-text mb-2">{val.short_description}</p>
                    <p className="text-black fs-5 mb-3">${val.price}</p>
                    <div className="mt-auto d-flex justify-content-center gap-1">
                      <button className="btn btn-outline-dark fs-5">
                        <BiCart />
                      </button>
                      <button
                        className="btn btn-dark w-100"
                        onClick={() => handleOpen(val.id)}
                      >
                        {val.btn}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <style>
          {`
          .tag-badge-circle {
  position: absolute;
  top: 5px;
  left: 5px;
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

          `}
        </style>
      </div>

      <Modal
        isModalOpen={isModalOpen !== null}
        data={products.find((feature) => feature.id === isModalOpen)}
        handleClose={handleClose}
      />
    </div>
  );
};

export default Shop;





