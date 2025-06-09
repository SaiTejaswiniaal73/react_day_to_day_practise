import React from 'react'
import "./About.css"
const About = () => {
  return (
    <div>
        <div className='aboutchild'>About</div>
        <div className='Child1'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
        <div className='personContainer'>
            <div className='person'>
                <img src="https://www.w3schools.com/w3images/team2.jpg" alt="" />
                <p>John Doe</p>
                <button>Contact</button>
            </div>
            <div className='person'>
                <img src="https://www.w3schools.com/w3images/team1.jpg" alt="" />
                <p>Jane Doe</p>
                <button>Contact</button>
            </div>
            <div className='person' >
                <img src="https://www.w3schools.com/w3images/team3.jpg" alt="" />
                <p>Mike Ross</p>
                <button>Contact</button>
            </div>
            <div className='person'>
                <img src="https://www.w3schools.com/w3images/team4.jpg" alt="" />
                <p>Dan Star</p>
                <button>Contact</button>
            </div>
        </div>
    </div>
  )
}

export default About