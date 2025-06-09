import React from "react";

const Child = (xyz) => {
  console.log(xyz);
  return (
    <div style={{backgroundColor:"yellow",marginBottom:"10px"}}>
   <h1>{xyz.year || xyz.a || xyz.hero}</h1>
   <p>{xyz.month || xyz.b?.name || xyz.dir}</p>
    <p>{xyz.date || xyz.loc || xyz.hero}</p>
     {/* <p>{xyz.day || xyz.whr || xyz.hero}</p> */}
      {/* <p>{xyz. || xyz.}</p> */}
    </div>
  );
};

export default Child;
   
      {/* <p>{xyz.loc}</p>
      <p>{xyz.whr}</p>
      <p>{xyz.a}</p>
      <p>{xyz.b}</p> */}
      {/* <h1>{xyz.name}</h1>
      <p>{xyz.age}</p>
      <p>{xyz.sal}</p>
      <p>{xyz.role}</p>
      <p>{xyz.loc}</p> */}
      {/* <p>{xyz.year}</p>
      <p>{xyz.date}</p>
      <p>{xyz.day}</p>
      <p>{xyz.month}</p> */}