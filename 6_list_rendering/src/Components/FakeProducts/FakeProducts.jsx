import React from "react";
import data from "./fakeData";
import "./FakeProducts.css";
const FakeProducts = () => {
  console.log(data);

  return (
    <div className="fake_productsComp">
      <h1>FakeProducts</h1>
      <div
        className="fake_products_container"
        style={{
          display: "grid",
          gap: "20px",
          gridTemplateColumns: "repeat(auto-fill,minmax(350px,1fr))",
        }}
      >
        {data.map((products, index) => {
          return (
            <div
              style={{ border: " 2px solid yellow", marginBottom: "20px" }}
              id="productCard"
            >
              {/* <p>{products.description}</p> */}

              <img src={products.image} id="img" />
              <p>{products.title}</p>
              <span>{products.price}</span>
              <p>{products.category}</p>
            </div>
          );
        })}
      </div>
      FakeProducts
    </div>
  );
};
export default FakeProducts;
