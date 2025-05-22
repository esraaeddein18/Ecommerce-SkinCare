import React, { useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal, removeItem } from "../redux/cartSlice";
import { Link } from "react-router-dom";

const Sidebar = ({ isSidebarOpen, closeSidebar }) => {
  const dispatch = useDispatch();
  const { data: cartProducts, totalAmount } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cartProducts]);

  const removeItemFromCart = (itemId) => {
    dispatch(removeItem({ id: itemId }));
    dispatch(getCartTotal());
  };

  return (
    <div>
      <div
        style={{
          zIndex: 100,
          transform: `translateX(${isSidebarOpen ? "0%" : "100%"})`,
        }}
        className="position-fixed top-0 end-0 vh-100 bg-white shadow overflow-auto transition-transform"
      >
        <div className="border-bottom mb-3 d-flex justify-content-between align-items-center px-3 py-2">
          <h1 className="h4 m-0">Your Cart</h1>
          <button
            type="button"
            className="btn btn-link text-dark p-0"
            onClick={closeSidebar}
            aria-label="Close sidebar"
          >
            <FaTimes size={24} />
          </button>
        </div>

        <div className="px-3">
          {cartProducts.length === 0 ? (
            <p className="text-center fs-5 fw-bold text-uppercase mt-5">
              Your Cart Has No Items
            </p>
          ) : (
            <>
              {cartProducts.map((item, key) => (
                <div
                  className="d-flex flex-wrap justify-content-between align-items-center mb-3"
                  key={key}
                >
                  <div className="d-flex align-items-center mb-2 mb-sm-0">
                    <div className="position-relative me-3">
                      <img
                        src={item.img}
                        alt="addedimg"
                        className="img-thumbnail"
                        style={{ width: "70px", height: "70px", objectFit: "cover" }}
                      />
                      <button
                        type="button"
                        className="btn btn-dark btn-sm position-absolute top-0 end-0 rounded-circle p-1"
                        style={{ transform: "translate(25%, -25%)" }}
                        onClick={() => removeItemFromCart(item.id)}
                        aria-label="Remove item"
                      >
                        <FaTimes size={17} />
                      </button>
                    </div>

                    <div className="d-flex gap-2">
                      <p className="mb-1">{item.title}</p>
                      <p className="mb-1">Qty: {item.quantity}</p>
                    </div>
                  </div>

                  <div className="text-end" style={{ minWidth: "80px" }}>
                    <p className="mb-0 fw-semibold">${item.price}</p>
                  </div>
                </div>
              ))}

              <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center bg-dark text-white p-3 rounded mt-4 gap-3">
                <h2 className="h5 mb-0">
                  Sub Total: <span>${totalAmount}</span>
                </h2>
                <Link
                  to="/cart"
                  onClick={closeSidebar}
                  className="btn btn-light text-dark px-4"
                >
                  View Cart
                </Link>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Overlay for mobile when sidebar is open */}
      {isSidebarOpen && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50"
          style={{ zIndex: 99 }}
          onClick={closeSidebar}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
