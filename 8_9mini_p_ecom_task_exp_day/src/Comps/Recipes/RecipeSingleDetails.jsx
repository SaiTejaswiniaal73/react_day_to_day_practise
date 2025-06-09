import React from "react";
import { recipes } from "./data";
import { useParams } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
const RecipeSingleDetails = () => {
  console.log(useParams, "useparams");
  const params = useParams();
  console.log(params, "params");
  const matchedRecipe = recipes.recipes.find((x) => x.id === Number(params.id));
  console.log(matchedRecipe, "matchedRecipe");
  const handleCartItems = (xyz) => {
    alert("hello added to cart clicked");
    const allCartItesmFromLs =
      JSON.parse(localStorage.getItem("cartItems")) || [];
    allCartItesmFromLs.push(xyz);
    localStorage.setItem("cartItems",JSON.stringify(allCartItesmFromLs))
  };
  const handleFavItems = (xyz) => {
    alert("fav has added");
    const allFavItesmFromLs =
      JSON.parse(localStorage.getItem("favItems")) || [];
    allFavItesmFromLs.push(xyz);
    localStorage.setItem("favItems",JSON.stringify(allFavItesmFromLs))
  
  };
  return (
    <div>
      <h1>{params.id}</h1>
      {matchedRecipe !== undefined ? (
        <div className="iteamdetails" style={{ display: "flex" }}>
          <img src={matchedRecipe.image} width={500} />
          
          <div>
            <div>
            <button onClick={() => handleCartItems(matchedRecipe)}>
              AddToCart
              <MdOutlineShoppingCart />
            </button>
            <button onClick={() => handleFavItems(matchedRecipe)}>
              AddToFavs <FaHeart />
            </button>
          </div>
            <p>{matchedRecipe.name}</p>
            <h2>ingredients</h2>
            <ol>
              {matchedRecipe.ingredients.map((x) => {
                return <li>{x}</li>;
              })}
            </ol>
            <h2>Instructions</h2>
            <ol>
              {matchedRecipe.instructions.map((x) => {
                return <li>{x}</li>;
              })}
            </ol>
          </div>
        </div>
      ) : (
        "no recipe found"
      )}
      RecipeSingleDetails
    </div>
  );
};

export default RecipeSingleDetails;
