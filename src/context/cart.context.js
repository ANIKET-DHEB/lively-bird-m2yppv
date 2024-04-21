import React, { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  // wishlist, setWishlist

  // const addToWishlist = (product) => {
  //   setWishlist((prevWishlist) =>

  const removeFromCart = (productToRemove) => {
    setCartItems((prevItems) =>
      prevItems.filter(({ item }) => item.id !== productToRemove.id)
    );
  };

  const isItemInCart = (cartItems, product) => {
    let isItemPresent = false;
    cartItems.forEach((cartItem) => {
      if (cartItem.item.id === product.id) {
        isItemPresent = true;
      }
    });
    return isItemPresent;
  };

  const increaseCartQuantity = (increaseProduct) => {
    setCartItems((prevItems) =>
      prevItems.map((cartItem) =>
        cartItem.item.id === increaseProduct.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    );
  };

  const decreaseCartQuantity = (productToDecrease) => {
    setCartItems((prevItems) =>
      prevItems.map((cartItem) =>
        cartItem.item.id === productToDecrease.id && cartItem.quantity > 1
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      )
    );
  };

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      let newItems = [];
      if (prevItems.length > 0) {
        if (isItemInCart(prevItems, product)) {
          newItems = prevItems.map((cartItem) => {
            if (cartItem.item.id === product.id) {
              return {
                ...cartItem,
                quantity: cartItem.quantity + 1,
                imgUrl: product.imgUrl
              };
            } else {
              return {
                ...cartItem
              };
            }
          });
        } else {
          newItems = [
            ...prevItems,
            { item: { ...product }, quantity: 1, imgUrl: product.imgUrl }
          ];
        }
      } else {
        newItems = [
          { item: { ...product }, quantity: 1, imgUrl: product.imgUrl }
        ];
      }
      return newItems;
    });
  };
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseCartQuantity,
        decreaseCartQuantity
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
