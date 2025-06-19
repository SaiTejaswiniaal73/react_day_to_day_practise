// import React from "react";
// import Child from "./Child";
// // random colour geertor program

import React from 'react'

const App2 = () => {
  return (
    <div></div>
  )
}

export default App2
// class App2 extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       bgcolor: "#ffffff",
//     };
//   }

//   handlechangecolour = () => {
//     let chars = "abcdef0123456789";
//     // alert("hi colour")
//     let colourcode = "#";
//     for (let i = 0; i < 6; i++) {
//       const indexNum = Math.floor(Math.random() * chars.length);
//     // console.log(indexNum)
//     //   console.log(chars[indexNum])
//       colourcode += chars[indexNum];
//     }
//     this.setState({ bgcolor: colourcode });
//   };

//   render() {
//     return (
//       <div
//         style={{
//           backgroundColor: this.state.bgcolor,
//           width: "100%",
//           height: "90vh",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <button onClick={this.handlechangecolour}>Random colour</button>
//       </div>
//     );
//   }
// }

// export default App2;


// example 2
//random code generator


// import React from "react";
// import Child from "./Child"; // If you’re not using this, you can remove it

// class App2 extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       quote: "click to get quote",
//     };
//   }

//   handlechangequote = () => {
//     const teluguQuotes = [
//       "జీవితం ఓ పుస్తకం లాంటిది, ప్రతి రోజు ఓ కొత్త పేజీ.",
//       "అవకాశం రాకపోతే, మీరు సృష్టించాలి.",
//       "విజయం సాధించాలంటే కష్టపడటం తప్పనిసరి.",
//       "నిన్నటి తప్పులు, నేటి పాఠాలు అవుతాయి.",
//       "ఆలోచన మార్చితే, జీవితం మారుతుంది.",
//       "పొరపాట్లు మనిషిని గొప్పవాడిగా చేస్తాయి.",
//       "నమ్మకం ఉన్నవాడే విజేత.",
//       "ప్రతి సమస్యకీ పరిష్కారం ఉంటుంది, ఓపిక అవసరం.",
//       "అసలైన ధైర్యం అంటే భయాన్ని ఎదుర్కొనడం.",
//       "పనితో నిబద్ధత ఉంటే ఫలితం తప్పదు."
//     ];

//     const randomIndex = Math.floor(Math.random() * teluguQuotes.length);
//     const randomQuote = teluguQuotes[randomIndex];

//     this.setState({ quote: randomQuote });
//   };

//   render() {
//     return (
//       <div
//         style={{
//           backgroundColor: "#f0f0f0",
//           width: "100%",
//           height: "90vh",
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "center",
//           fontFamily: "Segoe UI, sans-serif",
//           padding: "20px",
//           textAlign: "center"
//         }}
//       >
//         <h1>{this.state.quote}</h1>
//         <button
//           onClick={this.handlechangequote}
//           style={{
//             padding: "10px 20px",
//             fontSize: "16px",
//             cursor: "pointer",
//             marginTop: "20px"
//           }}
//         >
//           Random Quote
//         </button>
//       </div>
//     );
//   }
// }

// export default App2;


// example 3
// theme toggler
// import React from "react"
// class App2 extends React.Component{
//     constructor(){
//         super()
//         this.state={
//             isTheme:false
//         }
//     }
//     handleTheme=()=>{
//         this.setState({isTheme:!this.state.isTheme})
//     }
//     render(){
//         return(
//            <div
//         style={{
//           backgroundColor:this.state.isTheme ?"black":"white",
//           width: "100%",
//           height: "90vh",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         {/* <h1>{this.state.quote}</h1> */}
//         <button onClick={this.handleTheme}>Theme Toggle</button>
//       </div>
//         )
//     }
// }
// export default App2

// example 3
// theme toggler
// import React from "react"
// class App2 extends React.Component{
//     constructor(){
//         super()
//         this.state={
//             isTheme:false
//         }
//     }
//     handleTheme=()=>{
//         this.setState({isTheme:!this.state.isTheme})
//     }
//     render(){
//         return(
//            <div
//         style={{
//           backgroundColor:this.state.isTheme ?"black":"white",
//           width: "100%",
//           height: "90vh",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         {/* <h1>{this.state.quote}</h1> */}
//         <button onClick={this.handleTheme}>Theme Toggle</button>
//       </div>
//         )
//     }
// }
// export default App2


// sign up fomr toggle

// signup form toggle

// import React from "react";

// class App2 extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       isSignUp: false, // false = login by default
//     };
//   }

//   toggleForm = () => {
//     this.setState({ isSignUp: !this.state.isSignUp });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     alert(this.state.isSignUp ? "Sign Up Successful!" : "Login Successful!");
//   };

//   render() {
//     const { isSignUp } = this.state;

//     return (
//       <div
//         style={{
//           backgroundColor: "#f2f2f2",
//           width: "100%",
//           height: "100vh",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           flexDirection: "column",
//           fontFamily: "Arial, sans-serif",
//         }}
//       >
//         <h2>{isSignUp ? "Sign Up" : "Login"} Form</h2>

//         <form
//           onSubmit={this.handleSubmit}
//           style={{
//             backgroundColor: "white",
//             padding: "30px",
//             borderRadius: "12px",
//             boxShadow: "0 6px 12px rgba(0,0,0,0.15)",
//             display: "flex",
//             flexDirection: "column",
//             gap: "18px",
//             width: "320px", // wider box
//           }}
//         >
//           <input
//             type="email"
//             placeholder="Email"
//             required
//             style={{
//               padding: "15px",
//               fontSize: "16px",
//               borderRadius: "8px",
//               border: "1px solid #ccc",
//             }}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             required
//             style={{
//               padding: "15px",
//               fontSize: "16px",
//               borderRadius: "8px",
//               border: "1px solid #ccc",
//             }}
//           />
//           {isSignUp && (
//             <input
//               type="text"
//               placeholder="Username"
//               required
//               style={{
//                 padding: "15px",
//                 fontSize: "16px",
//                 borderRadius: "8px",
//                 border: "1px solid #ccc",
//               }}
//             />
//           )}
//           <button
//             type="submit"
//             style={{
//               backgroundColor: "#4CAF50",
//               color: "white",
//               padding: "12px",
//               fontSize: "16px",
//               border: "none",
//               borderRadius: "8px",
//               cursor: "pointer",
//             }}
//           >
//             {isSignUp ? "Sign Up" : "Login"}
//           </button>
//         </form>

//         <button
//           onClick={this.toggleForm}
//           style={{
//             marginTop: "20px",
//             backgroundColor: "transparent",
//             border: "none",
//             color: "#007bff",
//             cursor: "pointer",
//             fontSize: "15px",
//             textDecoration: "underline",
//           }}
//         >
//           {isSignUp
//             ? "Already have an account? Login"
//             : "Don't have an account? Sign Up"}
//         </button>
//       </div>
//     );
//   }
// }

// export default App2;



// import React, { Component } from 'react';
// import './App.css';  // Importing the CSS file


// class TabNavigation extends Component {
//   constructor() {
//     super();
//     this.state = {
//       activeTab: 'home'
//     };
//   }


//   setActiveTab = (tab) => {
//     this.setState({ activeTab: tab });
//   };


//   render() {
//     const { activeTab } = this.state;


//     return (
//       <div className="tab-container">
//         <div>
//           <div
//             className={`tab ${activeTab === 'home' ? 'active-tab' : ''}`}
//             onClick={() => this.setActiveTab('home')}
//           >
//             Home
//           </div>
//           <div
//             className={`tab ${activeTab === 'about' ? 'active-tab' : ''}`}
//             onClick={() => this.setActiveTab('about')}
//           >
//             About
//           </div>
//           <div
//             className={`tab ${activeTab === 'contact' ? 'active-tab' : ''}`}
//             onClick={() => this.setActiveTab('contact')}
//           >
//             Contact
//           </div>
//         </div>


//         <div className="content">
//           {activeTab === 'home' && <h3>Welcome to the Home Tab</h3>}
//           {activeTab === 'about' && <h3>About Us: We are awesome!</h3>}
//           {activeTab === 'contact' && <h3>Contact Us at: contact@company.com</h3>}
//         </div>
//       </div>
//     );
//   }
// }


// export default TabNavigation;