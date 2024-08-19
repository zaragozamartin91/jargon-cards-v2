import flashCardLogo from '../assets/flash-card-logo.png'
import Frame from '../components/Frame'

import React from 'react'
import { Link } from "react-router-dom"

export default function Home() {
  return <Frame>
      <img src={flashCardLogo} className="App-logo" alt="logo" />
      <a href="https://www.flaticon.com/free-icons/flash-card" title="flash card icons" style={{fontSize: 'xx-small'}}>Flash card icons created by manshagraphics</a>

      <p>Welcome to Jargon Cards</p>
      <p>Practice new words for free!</p>

      <Link to="/jargon-card-demo">Jargon card demo</Link>
      <Link to="/tinder-card-demo">Tinder card demo</Link>
      <Link to="/react-spring-demo">React spring demo</Link>

      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </a>

  </Frame>
}