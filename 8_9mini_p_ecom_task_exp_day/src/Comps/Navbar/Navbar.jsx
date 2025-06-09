import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
const Navbar = () => {
  const dataFromLs = JSON.parse(localStorage.getItem("cartItems")) || [];
  // console.log(dataFromLs, "data from loacalstorage");
  return (
    <div className="navbar">
      <h1>Teju_mart</h1>
      <div className="nav_links">
        <Link to="/products">
          <span>Products</span>
        </Link>
        <Link to="/recipes">
          <span>Recipes</span>
        </Link>
        <Link to="/cartItems">
          <MdOutlineShoppingCart size={30} style={{ color: "red" }} />
          {dataFromLs.length}
        </Link>
        <Link to="/favItems" >
        <FaHeart/>
        </Link> 
      </div>
    </div>
  );
};

export default Navbar;
