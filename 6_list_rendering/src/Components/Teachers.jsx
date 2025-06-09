import React from "react";
import Students from "./Students";
const Teacher_details = () => {
  const teacher_details = [
    {
      teacher_name: "Rahul Sharma",
      age: 20,
      rating: 5,
      college_Name: "Delhi University",
    },
    {
      teacher_name: "Anjali Verma",
      age: 32,
      rating: 4,
      college_Name: "Mumbai University",
    },
    {
      teacher_name: "Suresh Patel",
      age: 45,
      rating: 3,
      college_Name: "Banaras Hindu University",
    },
    {
      teacher_name: "Neha Gupta",
      age: 28,
      rating: 5,
      college_Name: "Jawaharlal Nehru University",
    },
    {
      teacher_name: "Amit Singh",
      age: 38,
      rating: 4,
      college_Name: "University of Calcutta",
    },
  ];

  return (
    <div
      className="teachers"
      style={{
        backgroundColor: "pink",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill,minmax(250px,1fr))",
        gap: "10px",
        border:"5px solid skyblue"
      }}
    >
      {teacher_details.map((teacher, index) => {
        return (
          <div key={index}
          style={{backgroundColor:"skyblue",marginBottom:"10px",padding:"10px",border:"5px solid navy",borderBlockColor:"yellow",textAlign:"center"}}>
            <h1 style={{backgroundColor:"pink"}}>{teacher.teacher_name}</h1>
            <h2>{teacher.rating}</h2>
            <h3>{teacher.age}</h3>
            <h4>{teacher.college_Name}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default Teacher_details;
