import React from "react";
import { recipes } from "./data";
import Recipe from "./Recipe";
import './Recipes.css'
const Recipes = () => {
  return (
    <div className="recipesAll">
      {recipes.recipes.map((recipe,index) => (
        <Recipe singleR={recipe} />
      ))}
    </div>
  );
};

export default Recipes;


// const Recipes = () => {
//   return (
//     <div className="recipesAll">
//       {recipes.recipes.map((recipe, index) => {
//         // console.log(recipe)
//         return (<div>
//             <Recipe singleR={recipe} />
           
//         </div>);
//       })}
//     </div>
//   );
// };

// export default Recipes;

