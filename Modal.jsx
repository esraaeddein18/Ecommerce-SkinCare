import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { PiMinus, PiPlus } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { addToCart, getCartTotal } from "../redux/cartSlice";
import { Link } from "react-router-dom";
// import { cat } from "../data/Data";

const Modal = ({ isModalOpen, data, handleClose }) => {
  const [qty, setQty] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const dispatch = useDispatch();

  const addItemToCart = (product) => {
    const totalPrice = qty * product.price;
    const tempProduct = {
      ...product,
      quantity: qty,
      totalPrice,
    };

    dispatch(addToCart(tempProduct));
    dispatch(getCartTotal());
    setAddedToCart(true);
  };

  const increaseQuantity = () => {
    setQty((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQty((prev) => (prev > 1 ? prev - 1 : 1));
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("modal-open");
    } else {
      setQty(1);
      setAddedToCart(false);
      document.body.classList.remove("modal-open");
    }
  }, [isModalOpen]);

  if (!isModalOpen || !data) return null;

  return (
    <div className="modal show fade d-block" tabIndex="-1" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{data.short_description}</h5>
            <button type="button" className="btn-close" onClick={handleClose}></button>
          </div>
          <div className="modal-body d-flex">
            <div className="me-4">
              <img
                src={data.img}
                alt={data.title}
                className="img-fluid rounded"
                style={{ maxWidth: "300px" }}
              />
                {data.tag && (
                  <div className="tag-badge-circle">
                    <span className="tag-text">{data.tag}</span>
                  </div>
                )}            </div>

            <div className="flex-grow-1">
              <p className="fs-5 text-muted">{data.description}</p>
              <h4 className="text-black mb-3 fw-bold">Price: ${data.price}</h4>

              <div className="mb-2">
                <label htmlFor="shades" className="form-label fw-semibold">
                  Shades:
                </label>
                <select className="form-select" id="shades">
                  <option>Choose an Option</option>
                  <option>Waterproof Very Black 802</option>
                  <option>Washable Blackset Black 800</option>
                  <option>Washable 801</option>
                  <option>Cosmic Black</option>
                </select>
              </div>

              <p className="text-muted fw-bold">In Stock: 300 Items</p>

              <div className="d-flex align-items-center mb-2 mt-2">
                <button className="btn btn-outline-secondary" onClick={decreaseQuantity}>
                  <PiMinus />
                </button>
                <span className="mx-3 fs-5">{qty}</span>
                <button className="btn btn-outline-secondary" onClick={increaseQuantity}>
                  <PiPlus />
                </button>
              </div>

              {addedToCart ? (
                <Link to="/cart" className="btn btn-secondary" onClick={handleClose}>
                  View Cart
                </Link>
              ) : (
                <button className="btn btn-dark" onClick={() => addItemToCart(data)}>
                  Add To Cart
                </button>
              )}

              <div className="mt-3 ln-1">
                <p className="fw-bolder fs-5 text-black">
                  Category: <span className="fs-6 text-secondary">{data.category}</span>
                </p>
                <p className="fw-bolder fs-5 text-black">
                  Brand: <span className="fs-6 text-secondary">{data.brand}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
