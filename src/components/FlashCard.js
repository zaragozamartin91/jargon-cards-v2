import './FlashCard.css'

// eslint-disable-next-line
import CardData from '../model/CardData'
import FlipCard from './FlipCard'

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

  // TODO : How can I display flag emojis for the languages?
  const frontContent = <>
    <div className='FlashCardLanguagePrompt'><span><i>Swedish </i></span></div>
    <p><strong>{word}</strong></p>
    <hr></hr>
    <p>{usage}</p>
  </>

  const backContent = <>
    <div className='FlashCardLanguagePrompt'><span><i>English</i></span></div>
    <p><strong>{translation}</strong></p>
    <hr></hr>
    <p>{definition}</p>
  </>

  return <FlipCard
    flipped={flipped}
    frontContent={frontContent}
    backContent={backContent}
  />
}


