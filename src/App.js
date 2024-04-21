import React, { useState } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Cart from "./components/Cart";
import Products from "./components/Products";
import Home from "./components/Home";
import "./styles.css";
import Wishlist from "./components/Wishlist";
import Login from "./components/Login";
import { MenuIcon } from "./icons/Menu";

function App() {
  const { pathname } = useLocation();
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isStorebtn, setIsStorebtn] = useState(pathname === "/");

  const menuClickHandler = () => {
    setIsNavbarOpen((prevState) => !prevState);
  };

  const handleGoToCartClick = () => {
    setIsStorebtn(true); //
  };

  return (
    <div className="App">
      <nav
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {pathname !== "/" && (
          <Link className="Home" to="/">
            <button className="home">Home</button>
          </Link>
        )}
        <MenuIcon onClick={menuClickHandler} />
        <div className={`menu ${isNavbarOpen && "active"}`}>
          {(pathname === "/" ||
            pathname === "/cart" ||
            pathname === "/wishlist") && (
            <Link to="/products">
              <button className="Storebtn">Store</button>
            </Link>
          )}
          <Link to="/cart">
            <button className="Cartbtn" onClick={handleGoToCartClick}>
              GO TO CART
            </button>
          </Link>
          <Link to="/wishlist">
            <button className="wishlistbtn">Wishlist</button>
          </Link>
          <Link to="/login" state={{ from: pathname }}>
            <button className="loginbtn">Login</button>
          </Link>
        </div>
      </nav>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
