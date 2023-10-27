import logo from '../logo.svg'
import { useState } from 'react'
import ReactCardFlip from 'react-card-flip'

export default function FlashCard(props) {
  const [flipped, setFlipped] = useState(false)
  const { frontText, backText } = props

  const handleClick = (e) => {
    console.log('Handling click')
    e.preventDefault()
    setFlipped(!flipped)
  }

  return (
    <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
      <div onClick={handleClick} style={{ backgroundColor: 'red' }}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>{frontText}</p>
      </div>

      <div onClick={handleClick} style={{ backgroundColor: 'blue' }}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>{backText}</p>
      </div>
    </ReactCardFlip>
  )
}


