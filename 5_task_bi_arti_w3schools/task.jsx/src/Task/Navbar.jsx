import React from 'react'

const Navbar = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%"}}>
<h1 style={{ fontFamily: 'Verdana, sans-serif', fontWeight: 'normal', fontSize: '36px' }}>
  <span style={{ backgroundColor: 'black', color: 'white', padding: '8px 12px' }}>
    Teja
  </span>
  <span style={{ backgroundColor: 'white', color: 'black', padding: '8px 12px' }}>
    Architecture
  </span>
</h1>

        <div style={{display:"flex",fontFamily: 'Verdana, sans-serif',gap:"18px",justifyContent:"space-around"}}>
            <p style={{fontSize:"20px"}}>Home</p>
            <p style={{fontSize:"20px"}}>About</p>
            <p style={{fontSize:"20px"}}>Contact</p>
        </div>
    </div>
  )
}

export default Navbar