import flashCardLogo from '../assets/flash-card-logo-v2.png'
import Frame from '../components/Frame'
import WrapperButton from '../components/WrapperButton'

import React from 'react'
import { Link } from "react-router-dom"

export default function Home() {
  return <Frame>
      <img src={flashCardLogo} className="Animated-logo" alt="logo" />
      <a href="https://www.flaticon.com/free-icons/flash-card" title="flash card icons" style={{fontSize: 'xx-small'}}>Flash card icons created by manshagraphics</a>

      <h2>Welcome to Jargon Cards</h2>
      <p>Have fun learning new words for free</p>

      <WrapperButton> <Link to="/jargon-card-demo">Jargon card demo</Link></WrapperButton>
      <WrapperButton> <Link to="/success-screen-demo">Success screen demo</Link></WrapperButton>

  </Frame>
}