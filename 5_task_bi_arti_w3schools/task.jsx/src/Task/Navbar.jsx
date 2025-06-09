import React from 'react'

const Navbar = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",backgroundColor:"whitesmoke",width:"100%"}}>
        <h1>Teja Architectue</h1>
        <div style={{display:"flex",gap:"18px",justifyContent:"space-around"}}>
            <p style={{fontSize:"20px"}}>Home</p>
            <p style={{fontSize:"20px"}}>About</p>
            <p style={{fontSize:"20px"}}>Contact</p>
        </div>
    </div>
  )
}

export default Navbar