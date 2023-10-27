import logo from '../logo.svg'
import ReactCardFlip from 'react-card-flip'

export default function FlashCard(props) {
  const { frontText, backText , flipped } = props

  return (
    <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
      <div style={{ backgroundColor: 'red' }}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>{frontText}</p>
      </div>

      <div style={{ backgroundColor: 'blue' }}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>{backText}</p>
      </div>
    </ReactCardFlip>
  )
}


