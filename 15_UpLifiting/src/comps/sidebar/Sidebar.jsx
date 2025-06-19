// import React from 'react'

// const Sidebar = ({uf}) => {
//     const handleInc=()=>{
//         uf((prev)=>prev+10)
//     }
//     const handleDec=()=>{
//         uf((prev)=>prev-10)
//     }
//     const handleRst=()=>{
//         uf(0)
//     }


//   return (
//     <div style={{backgroundColor:"wheat",width:"20%"
//         ,display:"flex",flexDirection:"column",justifyContent:"center",
//         gap:"20px"
//     }}>
//         {/* sidebar */}
//     <button style={{padding:"6px 20px",backgroundColor:"wheat"}} 
//     onClick={handleInc}>Inc</button>
//     <button  style={{padding:"6px 20px",backgroundColor:"greenyellow"

//     }}
//      onClick={handleRst}
//      >Reset</button>
//     <button  style={{padding:"6px 20px",backgroundColor:"smoke"
        
//     }} onClick={handleDec}>Dec</button></div>

//   )
// }

// export default Sidebar

import React from 'react'

const sidebar = ({sc}) => {
    const handleRandomClr=()=>{
        let chars="abcdef1234567890"
        let clrCode="#";
        for (let i=0;i<6;i++){
            const index=Math.floor(Math.random() * chars.length)
            clrCode+=chars[index]
        }
        sc(clrCode)
    }
    
  return (
    <div tyle={{backgroundColor:"wheat",width:"20%"
        ,display:"flex",flexDirection:"column",justifyContent:"center",
        gap:"20px",alignItems:"center"
    }}>
        
        <button onClick={handleRandomClr}>Random Colour</button>
    </div>
  )
}

export default sidebar