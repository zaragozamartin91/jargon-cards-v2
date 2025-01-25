import flashCardLogo from '../assets/flash-card-logo-v2.png'
import Frame from '../components/Frame'
import WrapperButton from '../components/WrapperButton'

import React from 'react'
import { Link } from "react-router-dom"

export default function Home() {
  return <Frame>
    <img src={flashCardLogo} className="Animated-logo" alt="logo" />
    <a href="https://www.flaticon.com/free-icons/flash-card" title="flash card icons" style={{ fontSize: 'xx-small' }}>Flash card icons created by manshagraphics</a>

    <h2>Welcome to Jargon Cards</h2>
    <p>Have fun learning new words for free</p>

    <div>
      <WrapperButton qualifiers={['animated']}>
        <Link to="/jargon-card-demo">
          <span>Jargon card demo</span>
        </Link>
      </WrapperButton>
    </div>

    <div>
      <WrapperButton qualifiers={['animated']}>
        <Link to="/success-screen-demo">
          <span>Success screen demo</span>
        </Link>
      </WrapperButton>
    </div>

    {
      /* <div style={{position: 'relative'}}> 
        <WrapperButton qualifiers={['animated']}> Sample button </WrapperButton>
        <WrapperButton qualifiers={['animated']} style={{position: 'absolute', top: '0', left: '0'}}> Hidden button </WrapperButton> 
      </div> */
    }

  </Frame>
}