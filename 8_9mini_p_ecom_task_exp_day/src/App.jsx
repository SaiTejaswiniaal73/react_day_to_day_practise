import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Comps/Navbar/Navbar";
import Products from "./Comps/Products/Products";
// import Recipe from "./Comps/Recipes/Recipe";
import Recipes from "./Comps/Recipes/Recipes";
import CartItems from "./Comps/CartItems/CartItems";
import FavItems from "./Comps/FavItems/FavItems";
import RecipeSingleDetails from "./Comps/Recipes/RecipeSingleDetails";
import NotFound from "./Comps/Recipes/NotFound";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/cartItems" element={<CartItems />} />
        <Route path='/recipes/:id' element={<RecipeSingleDetails />} />
        <Route path="/favItems" element={<FavItems />} />
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
      
    </div>
  );
};

export default App;
