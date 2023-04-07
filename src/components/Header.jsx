import React, { useState } from 'react'
import Welcome from './Welcome'
import Info from './Info'

const Header = () => {
    const [infoActive, setInfoActive] = useState(true)
    return (
    <>
        {infoActive ? <Welcome setInfoActive={setInfoActive}/> : ""}
        {!infoActive ? <Info/> : ""}
    </>
  )
}

export default Header