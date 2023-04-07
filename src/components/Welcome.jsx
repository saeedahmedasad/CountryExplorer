import React from 'react'
import "./css/welcome.css"
import {useNavigate} from "react-router-dom"

const Welcome = () => {
  const navigate = useNavigate()
  return (
    <div className="welcome">
        <div className="box">
            <div className="title">Enter Name of the <b>Country</b> and Get <b>Information</b> about it</div>
            <button className="btn" onClick={()=>navigate("/info")}>Get Started</button>
        </div>
    </div>
  )
}

export default Welcome