// import React ,{useState} from 'react'
// import Sidebar from './comps/Sidebar/sidebar'
// import Mainbar from './comps/Mainbar/Mainbar'
// const App = () => {
//   const[count,setCount]=useState(0)
//   return (
//     <div style={{display:"flex",justifyContent:"center",gap:"20px"
//       ,width:"100%",backgroundColor:"white",height:"100vh"
//     }}>
    
      
//       <Sidebar uf={setCount}></Sidebar>
//       <Mainbar c={count}/>
//       </div>
//   )
// }

// export default App



import React ,{useState} from 'react'
import Sidebar from './comps/Sidebar/sidebar'
import Mainbar from './comps/Mainbar/Mainbar'
const App = () => {
  const[color,setcolor]=useState("#000")
  return (

    <div style={{display:"flex",justifyContent:"center",gap:"20px"
      ,width:"100%",backgroundColor:"white",height:"100vh"
    }}>
    
      
     <Sidebar sc={setcolor}/>
      <Mainbar c={color}/>
      </div>
  )
}

export default App