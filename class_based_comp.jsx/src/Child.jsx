import React from "react"
// console.log(React,"react")
class Child extends React.Component{

  render(){
    console.log(this.props.abc.name,"this in chils.js 6th line")
    return(
      <div>
        <h1>
            {this.props.abc.name}
        </h1>
      </div>
    )
  }
}
export default Child