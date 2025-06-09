import React from "react";
import { useNavigate } from "react-router-dom";
// import "./Recipes.css";

const Recipe = ({ singleR }) => {
  console.log(useNavigate, "useN");
  const navigate = useNavigate();
  console.log(navigate, "nav");
  console.log({ singleR });
  return (
    <div className="recipeSingle" style={{ textAlign: "center" }}>
      <img src={singleR.image} alt=" " width={200} />
      <h1>{singleR.name}</h1>
      <p>{singleR.cuisine}</p>

      <span
        style={{ backgroundColor: "lightcoral", padding: "5px 15px",borderRadius:"6px",cursor:"pointer" }}
        onClick={()=>navigate(`/recipes/${singleR.id}`)}
      >
        ViewMore
      </span>
    </div>
  );
};

export default Recipe;

//  {/* <p>{singleR.ingredients}</p>
//         <p>{singleR.instructions}</p>
//         <p>{singleR.prepTimeMinutes}</p>
//         <p>{singleR.cookTimeMinute}</p>
//         <p>{singleR.servings}</p>
//         <p>{singleR.difficulty}</p>
//         <p>{singleR.cuisine}</p>
//         <p>{singleR.caloriesPerServing}</p>
//         <p>{singleR.tags}</p>
//         <p>{singleR.rating}</p>
//         <p>{singleR.reviewCount}</p>
//         <p>{singleR.mealType}</p> */}
//         {/* <p>{singleR.}</p>
//         <p>{singleR.}</p> */}
