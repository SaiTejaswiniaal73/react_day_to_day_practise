// import React from "react";
// import DashBoard from "./DashBoard.JSX";
// import BuyerDashBoard from "./BuyerDashboard";
// import SellerDashboard from "./SellerDashboard";

// // Prompting user for login

// const Login = () => {
//   const users = [
//     { email: "teja@gmail.com", pswd: "12345678", role: "buyer" },
//     { email: "i@gmail.com", pswd: "abc", role: "seller" },
//     { email: "sita@gmail.com", pswd: "pass9876", role: "seller" },
//     { email: "sita@gmail.com", pswd: "pass", role: "buyer" },
//   ];
// let myEmail = prompt("Enter your email:");
// let myPswd = prompt("Enter your password:");
// let myRole = prompt("Enter your role (buyer/seller):");

//   const matchedUser = users.find(
//     (user) =>
//       user.email === myEmail && user.pswd === myPswd && user.role === myRole
//   );

// if (matchedUser) {
//   if (matchedUser.role === "seller") {
//     const email=matchedUser.email;
//     const sEmail=email.split("@")
//     console.log(sEmail,"splitttedemail")
//     return <SellerDashboard  name={sEmail[0]}/>;
//   } else {
//     return <BuyerDashBoard />;
//   }
// } else {
//   alert("no user found");
// }
//   return <div>Login failed. Please reload and try again.</div>;
// };

// export default Login;

import React from "react";
import SellerDashboard from "./SellerDashboard";
import BuyerDashBoard from "./BuyerDashboard";

const Login = () => {
  const usersFromLS = JSON.parse(localStorage.getItem("users")) || [];
  console.log("All users:", usersFromLS);

  let myEmail = prompt("Enter your email:");
  let myPswd = prompt("Enter your password:");
  let myRole = prompt("Enter your role (buyer/seller):");

  const matchedUser = usersFromLS.find(
    (user) =>
      user.signUpEmail === myEmail &&
      user.signUpPswd === myPswd &&
      user.signUpRole === myRole
  );

  console.log("Matched user:", matchedUser);

  if (matchedUser) {
    const email = matchedUser.signUpEmail;
    const sEmail = email.split("@");
    console.log(sEmail, "SPLLUETED EMAIL");
    if (matchedUser.signUpRole === "seller") {
      return <SellerDashboard name={sEmail[0]} />;
    } else {
      return <BuyerDashBoard  name={sEmail[0]}/>;
    }
  } else {
    alert("No user found");
  }

  return <div>Login</div>;
};

export default Login;
