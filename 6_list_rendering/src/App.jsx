import React from 'react';

import Students  from './Components/Students';
import Teachers from './Components/Teachers'
// import FakeProducts from './Components/FakeProducts/FakeProducts';


const App=()=>{
  return(
    <div>
      <Students></Students>
      {/* <FakeProducts></FakeProducts> */}
      <Teachers></Teachers>
    </div>
  )
}
export default App;
