// example1-counter

// import React, { useState } from "react";

// const App = () => {
//   const [count, setcount] = useState(0);
//   const handleIncrement = () => {
//     setcount(count + 1);
//   };
//   const handleDecrement = () => {
//     setcount(count - 1);
//   };
//   const reset = () => {
//     setcount(0);
//   };
//   return (
//     <div>
//       <button onClick={handleIncrement}>+</button>
//       <h1>{count}</h1>
//       <button onClick={handleDecrement}>-</button>
//       <p></p>
//       <button onClick={reset}>res</button><br /><br />

//     </div>
//   );
// };

// export default App;

// example---2--colour theme

// import React, { useState } from 'react'

// const App = () => {

// const[color,setcolor]=useState("white")
// const handleclr=(xyz)=>{
// setcolor(xyz)
// }

//   return (
//     <div style={{backgroundColor:color}}>
//     <button onClick={()=>handleclr("blue")}>blue</button>
//     <button onClick={()=>handleclr("green")}>green</button>
//     <button onClick={()=>handleclr("red")}>red</button>
//     </div>
//   )
// }

// export default App

// example-3-random-colour

// import React, { useState } from "react";
// const App = () => {
//   const [randomClr, setRandomClr] = useState("#ffffff");
//   const handleRandomeClr = () => {
//     let chars = "abcdef01234567890";
//     let clrcode = "#";
//     for (let i = 0; i < 6; i++) {
//       let index = Math.floor(Math.random() * chars.length);
//       clrcode += chars[index];
//     }
//     console.log(clrcode);
//     setRandomClr(clrcode);
//   };
//   return (
//     <div style={{ backgroundColor: randomClr,height:"80vh",width:"100%" }}>
//       <button onClick={handleRandomeClr}>randomClr</button>
//     </div>
//   );
// };
// export default App

// import React, { useState } from "react";

// const App = () => {
//   const [theme, settheme] = useState(false);
//   const handleTheme = () => {
//     settheme(!theme);
//   };
//   const [color, setcolor] = useState(false);
//   const handleColour = () => {
//     setcolor(!color);
//   };
//   return (
//     <div
//       style={{
//         backgroundColor: theme ? "black" : "white",
//         height: "80vh",
//         width: "100%",
//       }}
//     >
//       <button onClick={handleTheme}>  </button>
//       <button onClick={handleColour}>text name (now:{color?"white":"black"})
//       </button>
//     </div>
//   );
// };

// export default App;

// import React, { useState } from 'react';
// const App = () => {
//   const [theme, setTheme] = useState(false); // false = light, true = dark
//   const handleTheme = () => {
//     setTheme(!theme);
//   };
//   return (
//     <div
//       style={{
//         backgroundColor: theme ? 'black' : 'white',
//         height: '80vh',
//         width: '100%',
        
//       }}
//     >
//       <button onClick={handleTheme}>
//          {theme ? 'Dark' : 'Light'}
//       </button>
//     </div>
//   );
// };
// export default App;

import React, { useState } from "react";
const App = () => {
  const [randomClr, setRandomClr] = useState("#ffffff");
  const [count, setcount] = useState(0);
  const[signupshow,setsignupshow]=useState(false)
  const [theme,setTheme]=useState(false)
  const handleStates = () => {
    setcount(count + 1);
        let chars = "abcdef1234567890";
    let clrcode = "#";
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * chars.length);
      clrcode += chars[index];
    }
    console.log(clrcode)
    setRandomClr(clrcode)
    setsignupshow(!signupshow)
    setTheme(!theme)
  };
  return (
    <div style={{ backgroundColor: randomClr, height: "80vh", width: "100%" }}>
      <h1>{count}</h1>
      <button onClick={handleStates}>click</button>
       {signupshow && <form>
        <input type="text" /><br/>
        <input type="text" /><br/>
        <input type="text" /><br/>
        </form>}
    </div>
  );
};
export default App;

// import React from 'react'

// const App = () => {
//   return (
//     <div>App</div>
//   )
// }

// export default App
