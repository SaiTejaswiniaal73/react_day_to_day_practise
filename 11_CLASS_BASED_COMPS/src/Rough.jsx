import React from "react";
class Rough extends React.Component{
    constructor(){
        super()
            this.state={
                city:"hyd",
                age:23,
                color:"red"
            }
    }
    render(){
        return(
            <div>
                <h1>hello rough compnat</h1>
                <h2>city_name:{this.state.city}</h2>
                <p>color:{this.state.color}</p>
            </div>
        )
    }
}
export default Rough