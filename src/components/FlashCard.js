import { useEffect, useRef, useState } from 'react'
import ReactCardFlip from 'react-card-flip'
import './FlashCard.css'

// eslint-disable-next-line
import CardData from '../model/CardData'

const MIN_HEIGHT = 250
const MIN_WIDTH = 250

/**
 * Creates a flippable flash card based on a word
 * @param {{filled: boolean, cardData: CardData}} props 
 * @returns Flash card react component
 */
export default function FlashCard(props) {
  const flipped = props.flipped ?? false
  const cardData = props.cardData

  const word = cardData.word ?? '' // original word
  const usage = cardData.usage ?? '' // example of use in original language

  const translation = cardData.translation ?? ''
  const definition = cardData.definition ?? ''

  const [minWidth, setMinWidth] = useState(0)
  const [minHeight, setMinHeight] = useState(0)

  const frontDiv = useRef(null)
  const backDiv = useRef(null)

  function parseDimensions(element) {
    const computedStyles = window.getComputedStyle(element)

    // Access specific styles
    const width = computedStyles.getPropertyValue('width')
    const height = computedStyles.getPropertyValue('height')

    return { width: parseInt(width, 10), height: parseInt(height, 10) }
  }

  useEffect(() => {
    const frontDivDimensions = parseDimensions(frontDiv.current)
    const backDivDimensions = parseDimensions(backDiv.current)

    const maxDivWidth = Math.max(frontDivDimensions.width, backDivDimensions.width)
    const maxDivHeight = Math.max(frontDivDimensions.height, backDivDimensions.height)

    console.log('maxWidth', maxDivWidth)
    console.log('maxHeight', maxDivHeight)

    setMinWidth(Math.max(maxDivWidth, MIN_WIDTH))
    setMinHeight(Math.max(maxDivHeight, MIN_HEIGHT))
  }, [])

  const frontDivStyle = {}
  if (minWidth > 0) frontDivStyle['width'] = `${minWidth}px`
  if (minHeight > 0) frontDivStyle['height'] = `${minHeight}px`

  const backDivStyle = {}
  if (minWidth > 0) backDivStyle['width'] = `${minWidth}px`
  if (minHeight > 0) backDivStyle['height'] = `${minHeight}px`

  return (
    <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
      <div className='FlashCardSide FlashCardFront' ref={frontDiv} style={frontDivStyle}>
        <div className='FlashCardLanguagePrompt'><span><i>Swedish</i></span></div>
        <p><strong>{word}</strong></p>
        <hr></hr>
        <p>{usage}</p>
      </div>

      <div className='FlashCardSide FlashCardBack' ref={backDiv} style={backDivStyle}>
        <div className='FlashCardLanguagePrompt'><span><i>English</i></span></div>
        <p><strong>{translation}</strong></p>
        <hr></hr>
        <p>{definition}</p>
      </div>
    </ReactCardFlip>
  )
}


