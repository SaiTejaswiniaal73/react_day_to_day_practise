import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
// import { Routee,Router,Route } from "react-router-dom";
const SignUp = () => {
  const nav=useNavigate()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const handleSignUp=(e)=>{
    e.preventDefault();
    if(role=="seller"){
      let sellerList=JSON.parse(localStorage.getItem("seller")|| "[]")
      sellerList.push({name,email,password,role})
      localStorage.setItem("seller",JSON.stringify(sellerList))
      nav("/login")
      alert("seller")
    }
    else{
      let BuyerList=JSON.parse(localStorage.getItem("buyer")|| "[]")
      BuyerList.push({name,email,password,role})
      localStorage.setItem("buyer",JSON.stringify(BuyerList))
      nav("/login")
      alert("buyer")
    }
  }

  return (
    <div>
      <form action="signUpForm" onSubmit={handleSignUp} >
        <input
          type="text"
          placeholder=" enter name"
          onChange={(e) => {
            setName(e.target.value);
            console.log(e.target.value, "val");
          }}
        />
        <input
          type="email"
          placeholder="enter email"
          onChange={(e) => {
            setEmail(e.target.value);
            console.log(e.target.value, "val");
          }}
        />
        <input
          type="password"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
         
        />
        <select
          name=""
          id="role"
          onChange={(e) => {
            setRole(e.target.value);
            console.log(e.target.value, "val");
          }}
        >
          <option  value="buyer">Buyer</option>
          <option value="seller">Seller</option>
        </select>
        <button type="submit">submit</button>
      </form>
      <h1>{name}</h1>
      <p>
        {email}
        {password}
      </p>
      <p>{role}</p>
    </div>
  );
};
export default SignUp;
