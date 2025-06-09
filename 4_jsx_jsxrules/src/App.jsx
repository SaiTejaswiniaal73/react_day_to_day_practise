// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css' //alias name for jsx

import Jsx from "./Jsx";
import JsxRules from "./JsxRules";
import { Teju } from "./Teju";
import Abc from "./JsxRules"; //alias name"abc" for jsx
// import { Practise } from './practise';
import { Practise, city, state } from "./practise";

//alias name for jsx

function App() {
  return (
    <div>
      <h1>helo today class is jsx and its rules</h1>
      <Jsx></Jsx>
      <JsxRules />
      <Abc></Abc>

      <Practise></Practise>
      <h1>hi my city is {city}</h1>
      <Teju></Teju>
      <p style={{ backgroundColor: "red" }}>
        hello my state is is {state} this
      </p>
    </div>
  );
}

export default App;
