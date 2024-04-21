import React, { useContext } from "react";
import { CartContext } from "../context/cart.context";
import { WishlistContext } from "../context/Wishlist.context";
// import { ProtectedRoute } from "../ProtectedRoute";

export const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);

  const addToCartHandler = (product) => {
    addToCart(product);
  };

  const addToWishlistHandler = (product) => {
    addToWishlist(product);
  };

  return (
    <div className="maincontent">
      <img className="image" src={product.imgUrl} alt="" />

      <div className="textcontent">
        <p className="Productname">
          <h1>{product.productName}</h1>
        </p>

        <p className="discountedprice">
          {product.currency} {product.discountedPrice} 40% off
        </p>

        <p className="orignalPrice">
          {product.currency}
          {product.originalPrice}
        </p>

        <button
          className="Addtocartbtn"
          onClick={() => addToCartHandler(product)}
        >
          ADD ITEM TO CART
        </button>

        <button
          className="AddtoWishlistbtn"
          onClick={() => addToWishlistHandler(product)}
        >
          ADD TO WISHLIST
        </button>
      </div>
    </div>
  );
};
