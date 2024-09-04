import React from 'react'
import flashCardLogo from '../assets/checkmark.png'

export default function SuccessScreen() {

  return <>
      <img src={flashCardLogo} className="App-logo" alt="logo" />

      <h2>Course complete!</h2>
      <p>Here are your results:</p>
  </>
}
