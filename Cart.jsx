import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal, removeItem, updateQuantity } from "../redux/cartSlice";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { PiMinus, PiPlus } from "react-icons/pi";

const Cart = () => {
  const dispatch = useDispatch();
  const { data: cartProducts, totalAmount } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cartProducts, dispatch]);

  const removeItemFromCart = (itemId) => {
    dispatch(removeItem({ id: itemId }));
  };

  const decreaseQuantity = (itemId, currentQuantity) => {
    if (currentQuantity > 1) {
      dispatch(updateQuantity({ id: itemId, quantity: currentQuantity - 1 }));
    }
  };

  const increaseQuantity = (itemId, currentQuantity) => {
    dispatch(updateQuantity({ id: itemId, quantity: currentQuantity + 1 }));
  };

  return (
    <div className="container py-5">
      <h2 className="text-center fw-bolder mb-5 mt-5">Your Products</h2>

      {cartProducts.length === 0 ? (
        <div className="alert alert-light text-center">
          <h4 className="mb-3">Your Cart Has No Items</h4>
          <Link to="/" className="btn btn-dark">Return To Shopping</Link>
        </div>
      ) : (
        <>
          <div className="table-responsive">
            <table className="table table-bordered align-middle text-center">
              <thead className="table-dark">
                <tr>
                  <th scope="col">Product</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Subtotal</th>
                  <th scope="col">Remove</th>
                </tr>
              </thead>
              <tbody>
                {cartProducts.map((item, key) => (
                  <tr key={key}>
                    <td>
                      <img
                        src={item.img}
                        alt="Product"
                        className="img-fluid"
                        style={{ height: "100px" }}
                      />
                    </td>
                    <td className="fw-bold">${item.price}</td>
                    <td>
                      <div className="d-flex justify-content-center align-items-center">
                        <button
                          className="btn btn-outline-secondary me-2"
                          onClick={() => decreaseQuantity(item.id, item.quantity)}
                        >
                          <PiMinus />
                        </button>
                        <span className="fw-bold">{item.quantity}</span>
                        <button
                          className="btn btn-outline-secondary ms-2"
                          onClick={() => increaseQuantity(item.id, item.quantity)}
                        >
                          <PiPlus />
                        </button>
                      </div>
                    </td>
                    <td className="fw-bold">${item.price * item.quantity}</td>
                    <td>
                      <button
                        className="btn btn-outline-danger"
                        onClick={() => removeItemFromCart(item.id)}
                      >
                        <FaTimes />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="card w-50 mx-auto shadow mt-5">
            <div className="card-body">
              <h4 className="card-title text-center mb-4">Cart Total</h4>
              <div className="d-flex justify-content-between mb-2">
                <span>Sub Total:</span>
                <span>${totalAmount}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Shipping:</span>
                <span>$10</span>
              </div>
              <div className="d-flex justify-content-between fw-bold border-top pt-2">
                <span>Grand Total:</span>
                <span>${totalAmount + 10}</span>
              </div>
              <div className="text-center mt-4">
                <Link to="/shop" className="btn btn-dark">Continue Shopping</Link>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;


