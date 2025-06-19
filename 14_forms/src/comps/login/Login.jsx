import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const nav = useNavigate();
  //   const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const handleLogin = () => {
    alert("hello");
  };
  return (
    <div>
      <div>
        <form action="login" id="loginForm" onSubmit={handleLOGIN}>
          <input
            type="email"
            placeholder="enter email"
            onChange={(e) => {
              setEmail(e.target.value);
              console.log(e.target.value, "val");
            }}
            required
          />
          <input
            type="password"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <select
            name=""
            id="role"
            onChange={(e) => {
              setRole(e.target.value);
              console.log(e.target.value, "val");
            }}
            required
          >
            <option value="buyer" required>
              Buyer
            </option>
            <option value="seller" required>
              Seller
            </option>
          </select>
          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
