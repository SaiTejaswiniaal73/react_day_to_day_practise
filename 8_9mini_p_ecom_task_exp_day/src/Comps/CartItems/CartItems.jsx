import React from "react";
import './cartItems.css'
const CartItems = () => {
  const dataFromLs = JSON.parse(localStorage.getItem("cartItems"));
  console.log(dataFromLs, "data from loacalstorage");
  return (
    <div>
      CartItems
      <h1>allCartItesmFromLs</h1>
      <table>
        <thead>
          <tr>
            <th>s.no</th>
            <th>item</th>
            <th>itemImg</th>
            <th>Cuisine</th>
          </tr>
        </thead>
        <tbody>
          {dataFromLs.map((cItem,index)=>{
            return (
              <tr key={index}>
                <td>{index+1}</td>
                <td>{cItem.name}</td>
                <td><img src={cItem.image} width={80}/></td>
                <td>{cItem.Cuisine}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CartItems;
