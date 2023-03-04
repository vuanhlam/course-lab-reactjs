import './Footer.scss'

import { useContext } from "react";
import { ThemeContext } from "../Theme/ThemeContext";
import React from 'react'



function Footer() {
  const { themeUI } = useContext(ThemeContext)
  return (
    <div className='footer' style={{ backgroundColor: themeUI.backgroundColor, color: themeUI.color }}>
        <center><h1 style={{lineHeight: '100px'}}>Netflix Vietnam</h1></center>
    </div>
  )
}

export default Footer