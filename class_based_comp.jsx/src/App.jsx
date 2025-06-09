// import React from "react";
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "Teju",
//       age: 23,
//     };
//   }
//   render() {
//     console.log(React, "react");
//     return (
//       <div>
//         <h1>hello this is class based compnets</h1>
//         <h1><span>Name: </span>{this.state.name}</h1>
//         <p><span style={{font:"bold"}}>Age: </span>{this.state.age}</p>
//       </div>
//     );
//   }
// }
// export default App;

// import React from "react";
// class App extends React.Component {
//   constructor() {
//     super();
//     // this.state=100
//     // this.state-=[10,20,30]
//     this.state = [{id:1,name:"teju"},{id:2,name:"vig"},{id:3,name:"sam"}];
//   }
//   render() {
//     console.log(React, "react");
//     const data=200
//     return (
//       <div>

//         {/* {
//           this.state.map((x)=>{
//             return(
//                 <h1>{x}</h1>
//             )

//         })
//         } */}
//       <h1>{data}</h1>
//         {
//           this.state.map((x)=>{
//             return(
//               <>
//               <h1><span>Name:</span>{x.name}</h1>
//               </>

//             )
//           })
//         }
//         <h1>hello this is class based compnets</h1>
//         {/* <h1>{this.state}</h1> */}
//       </div>
//     );
//   }
// }
// export default App;

//basic class syntax
// import React from "react"
// import Child from "./Child";
// class App extends React.Component{
//   constructor(){
//     super();
//     this.state={
//       id:1,name:"padama",age:23
//     }
//   }
//   render(){
//     return(
//       <div>
//         <Child abc={this.state}/>
//       </div>
//     )
//   }
// }
// export default App

import React from "react";
import Child from "./Child";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      name:"teja"
    };
  }
  handleIncrement = () => {
    // alert("hello ther + clicked");
    this.setState({count:this.state.count + 1})//updater function for state
  };
  handleDecrement = () => {
    // alert("helo - clicked");
    this.setState({count:this.state.count - 1}
     
    )//updater function for state
  };
  render() {
    return (
      <div>
        {/* <button onClick={()=>{
          this.state.name
        }}>MyName</button> */}
        {/* <Child abc={this.state}/> */}
        <button onClick={this.handleDecrement}  disabled={this.state.count==0}>-</button>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleIncrement}  disabled={this.state.count==10}>+</button>
      </div>
    );
  }
}
export default App;
