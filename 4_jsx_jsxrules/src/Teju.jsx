 import "./Teju.css"
 export const Teju=()=>{
    const name="Teju"
    return(
        <div style={{backgroundColor:"pink",textAlign:"center",padding:"2rem"}}>
            <h1 className="name">hello
                my name is {name}
            </h1>
        </div>
    )
}


//NAMEDS FUNCTION EXPORT EXAMPEL FOR THIS WE HAVE TO USE 
//import { Teju } from './Teju'
//when cm to default we will usee //import Jsx from "./Jsx"
//named exporting is above and default expost is one the way in exportign component
//export defaul and nameed export are the types