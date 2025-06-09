import React from "react";

const FavItems = () => {
  const favItemsFromLs = JSON.parse(localStorage.getItem("favItems")) || [];

  return (
    <div>
      <h1>Favorite Items</h1>
      {favItemsFromLs.length === 0 ? (
        <p>No favorites found.</p>
      ) : (
        favItemsFromLs.map((favItem, index) => (
          <div key={index}>
            <h2>{favItem.name}</h2>
            <img src={favItem.image} width={100} alt={favItem.name} />
            <p>Cuisine: {favItem.Cuisine}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default FavItems;
