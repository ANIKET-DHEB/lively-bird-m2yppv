import React, { useContext } from "react";
import { WishlistContext } from "../context/Wishlist.context";
import { ProtectedRoute } from "../ProtectedRoute";
import { useLocation } from "react-router-dom";

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);

  const { pathname } = useLocation();
  return (
    <div className="wishlistpage">
      <ProtectedRoute path={pathname} />
      <h2 className="listheader">Your Wishlist Page</h2>
      {wishlist.map((product) => (
        <div key={product.id}>
          <img
            className="wishlistimg"
            src={product.imgUrl}
            alt={product.productName}
          />
          <p className="wishlistproduct">{product.productName}</p>
          <p className="currency">
            {product.currency}
            {product.discountedPrice}
          </p>
          <button
            className="removelist"
            onClick={() => removeFromWishlist(product)}
          >
            Remove from Wishlist
          </button>
        </div>
      ))}
    </div>
  );
};

export default Wishlist;
