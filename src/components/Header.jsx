import React from 'react'
import MainImg from "../assets/investment-calculator-logo.png";
function Header() {

    

  return (
    <header id="header">
        <h1>Investment Calculator</h1>
        <img src={MainImg} alt="Investment Calculator Logo" />
      </header>
  )
}

export default Header