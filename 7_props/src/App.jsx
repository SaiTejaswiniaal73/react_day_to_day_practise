// import React from "react";
// import Child from "./Child";
// const App = () => {
//   const details = {
//     name: "teju",
//     age: 20,
//     sale: 2000,
//     role: "process associate"
//   };
//   return <div>
//     <Child a="hyd" b={details} loc="hafzpet" whr="10" />
//     <Child year="2025" month ="may" date="29" day="Thrusday"/>
//     <Child hero="ntr" dir="rgvr"/>
//     {/* //a adn b are poprs whihc carreis strign to child compmens */}

//   </div>;
// };
// export default App;
// // react comp snipets
// // loc="hafzpet" whr="8"

// import React from 'react'
// import Navbar from './Comps/Navbar/Navbar'
// import {Routes,Route} from "react-router-dom"
// import Products from './Comps/Products/Products'

// const App = () => {
//   return (
//     <div>
//       <Navbar/>
//         <Routes>
          
//           <Route path='/products' element={<Products />} />

//         </Routes>

//     </div>
//   )
// }

import React from 'react';
import Navbar from './Comps/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Products from './Comps/Products/Products';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
};

export default App;






