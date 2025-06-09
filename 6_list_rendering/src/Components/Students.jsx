// import React from "react";

// const Students=()=>{
// //     const Stu_details = [
// //   {
// //     name: "Rahul Sharma",
// //     age: 20,
// //     roll: 101,
// //     collegeName: "Delhi University"
// //   },
// //   {
// //     name: "Priya Patel",
// //     age: 21,
// //     roll: 102,
// //     collegeName: "Mumbai University"
// //   },
// //   {
// //     name: "Amit Singh",
// //     age: 19,
// //     roll: 103,
// //     collegeName: "Banaras Hindu University"
// //   },
// //   {
// //     name: "Neha Gupta",
// //     age: 22,
// //     roll: 104,
// //     collegeName: "Jawaharlal Nehru University"
// //   },
// //   {
// //     name: "Suresh Kumar",
// //     age: 20,
// //     roll: 105,
// //     collegeName: "Anna University"
// //   },
// //   {
// //     name: "Anjali Desai",
// //     age: 21,
// //     roll: 106,
// //     collegeName: "Gujarat University"
// //   },
// //   {
// //     name: "Vikram Joshi",
// //     age: 19,
// //     roll: 107,
// //     collegeName: "Pune University"
// //   },
// //   {
// //     name: "Deepika Reddy",
// //     age: 20,
// //     roll: 108,
// //     collegeName: "Osmania University"
// //   },
// //   {
// //     name: "Rajesh Malhotra",
// //     age: 22,
// //     roll: 109,
// //     collegeName: "Panjab University"
// //   },
// //   {
// //     name: "Swati Chatterjee",
// //     age: 21,
// //     roll: 110,
// //     collegeName: "Calcutta University"
// //   }
// // ];
// // console.log(Stu_details)
// const data=["teju","vamshi","rami"]
// const loc="hyd"
//     return(
//         <div className="students">
//             Students
//             <h1>{loc}</h1>
//             {/* <h5>{data}</h5> */}
//             <p> {data.map((elem,index)=>{
//                 console.log(elem)
//                 return(
//                     <div>
//                         <span>
//                             {elem}
//                         </span>
//                     </div>
//                 )
//             })}</p>
//         </div>
//     )
// }
// export default Students

import React from "react";

const Students = () => {
  const Stu_details = [
    {
      name: "Rahul Sharma",
      age: 20,
      roll: 101,
      collegeName: "Delhi University",
    },
    {
      name: "Priya Patel",
      age: 21,
      roll: 102,
      collegeName: "Mumbai University",
    },
    {
      name: "Amit Singh",
      age: 19,
      roll: 103,
      collegeName: "Banaras Hindu University",
    },
    {
      name: "Neha Gupta",
      age: 22,
      roll: 104,
      collegeName: "Jawaharlal Nehru University",
    },
    {
      name: "Suresh Kumar",
      age: 20,
      roll: 105,
      collegeName: "Anna University",
    },
    {
      name: "Anjali Desai",
      age: 21,
      roll: 106,
      collegeName: "Gujarat University",
    },
    {
      name: "Vikram Joshi",
      age: 19,
      roll: 107,
      collegeName: "Pune University",
    },
    {
      name: "Deepika Reddy",
      age: 20,
      roll: 108,
      collegeName: "Osmania University",
    },
    {
      name: "Rajesh Malhotra",
      age: 22,
      roll: 109,
      collegeName: "Panjab University",
    },
    {
      name: "Swati Chatterjee",
      age: 21,
      roll: 110,
      collegeName: "Calcutta University",
    },
  ];
  return (
    <div
      className="students"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill,minmax(250px,1fr))",
        gap: "10px",
      }}
    >
      {Stu_details.map((student) => {
        return (
          <div
            style={{
              marginBottom: "20px",
              border: "1px solid pink",
              padding: "10px",
            }}
          >
            <h1>{student.name}</h1>
            <p>{student.age}</p>
            <p>{student.collegeName}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Students;
