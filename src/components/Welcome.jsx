import React from 'react'
import "./css/welcome.css"

const Welcome = ({ setInfoActive }) => {
  return (
    <div className="welcome">
        <div className="box">
            <div className="title">Enter Name of the <b>Country</b> and Get <b>Information</b> about it</div>
            <button className="btn" onClick={() => setInfoActive(false)}>Get Started</button>
        </div>
    </div>
  )
}

export default Welcome