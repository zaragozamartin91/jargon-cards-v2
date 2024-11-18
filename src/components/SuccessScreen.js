import React from 'react'
import flashCardLogo from '../assets/checkmark.png'
import WrapperButton from './WrapperButton'
import { Link } from "react-router-dom"

export default function SuccessScreen({ cardCount = 0, score = 0 }) {

  return <>
    <img src={flashCardLogo} className="App-logo" alt="logo" />

    <h2>Course complete!</h2>
    <p>Here are your results:</p>
    <ul>
      <li>Cards: {cardCount}</li>
      <li>Score: {score}</li>
    </ul>
    <WrapperButton> <Link to="/">Back to main menu</Link></WrapperButton>
  </>
}
