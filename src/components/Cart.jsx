import React, { useContext } from "react";
import { CartContext } from "../context/cart.context";
import { ProtectedRoute } from "../ProtectedRoute";
import { useLocation } from "react-router-dom";

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    increaseCartQuantity,
    decreaseCartQuantity,
  } = useContext(CartContext);

  const { pathname } = useLocation();

  const totalCartValue = cartItems.reduce((totalValue, cartItem) => {
    return (totalValue =
      totalValue + cartItem.item.discountedPrice * cartItem.quantity);
  }, 0);

  const RemoveHandler = (productToRemove) => {
    removeFromCart(productToRemove);
  };

  const IncreaseCartHandler = (increaseProduct) => {
    increaseCartQuantity(increaseProduct);
  };

  const DecreaseCartHandler = (deecreaseProduct) => {
    decreaseCartQuantity(deecreaseProduct);
  };

  return (
    <div>
      <ProtectedRoute path={pathname} />
      <p className="header">
        <h2>Total Cart Items: {cartItems.length}</h2>
        <h2>Total Cart Value: {totalCartValue} </h2>
      </p>
      {cartItems.map(({ item, quantity, imgUrl }) => {
        return (
          <div key={item.id}>
            <p className="cartcontent">
              <img
                className="cartimg"
                src={item.imgUrl}
                alt={item.productName}
              />

              <div className="texter">
                <p className="product">{item.productName}</p>

                <p className="currency">
                  {item.currency}
                  {item.discountedPrice}
                </p>

                <p className="quantity">
                  {"Qty:"} {quantity}
                  <button
                    className="incbtn"
                    onClick={() => IncreaseCartHandler(item)}
                  >
                    +
                  </button>
                  <button
                    className="decbtn"
                    onClick={() => DecreaseCartHandler(item)}
                  >
                    -
                  </button>
                </p>

                <p>
                  <button
                    className="removebtn"
                    onClick={() => RemoveHandler(item)}
                  >
                    Remove
                  </button>
                </p>
              </div>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
