import React, { useState } from "react";
import "./SignUp.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { authentication } from "../../fireBaseConfig/firebaseConfig";
import { collection,addDoc } from "firebase/firestore";
import { db } from "../../fireBaseConfig/firebaseConfig";
const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const HandleSignUpSubmit=async(e)=>{
    e.preventDefault();
    if (role==="recruiter"){
        await createUserWithEmailAndPassword(authentication,email,password)
        alert("account created successfully")
        const col=collection(db,"recruiters")
        const docRef=await addDoc(col,{
            name:name,
            email:email,
            password:password
        })
        console.log(docRef)
        alert("hey recuriter db created")
        // await fetch("http://re-pro-default-rtdb.firbaseio.com/recruiters.json",{

        // })
    }

  }

  return (
    <div className="signup-container">
      <form action="" onSubmit={HandleSignUpSubmit} className="signup-form">
        <h2>Sign Up</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        
            required
        />
        <select value={role} onChange={(e) => setRole(e.target.value)} required>
         <option value="">Choose your role</option>
          <option value="recruiter">Recruiter</option>
          <option value="jobseeker">Job Seeker</option>
        </select>
        <button type="submit"
        
        >Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
