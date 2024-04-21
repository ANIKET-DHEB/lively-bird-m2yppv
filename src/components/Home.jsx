import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="homepage">
      <img
        className="homeimg"
        src="https://images.pexels.com/photos/2465877/pexels-photo-2465877.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="Welcome to The Pets Store"
      />
      <h1 className="headingname">Welcome to The Pets Store</h1>
      <h2 className="text">
        A hobby is the perfect way to start the healing process, get some mental
        peace and to spend some me time.
      </h2>
      <h2 className="text1">
        Start a new hobby with handpicked products from experts
      </h2>
      <Link to="/products">
        <button className="Startbtn">START SHOPPING</button>
      </Link>
    </div>
  );
};

export default Home;
