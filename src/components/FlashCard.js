import './FlashCard.css'

// eslint-disable-next-line
import CardData from '../model/CardData'
import FlipCard from './FlipCard'

/**
 * Creates a html element based on type.
 * @param {{text: string, values: string[], type: string}} props
 * @returns React component
 */
function Element({ text, values, type }) {
  switch (type) {
    case 'definition': return text ? <p>{text}</p> : <></>
    case 'example': return text ? <p><strong>Example:</strong> {text}</p> : <></>
    case 'synonym': return values.length
      ? <p><strong>Synonyms:</strong> {values.join(', ')}</p>
      : <></>
    case 'otherTranslations': return values.length
      ? <p><strong>Also:</strong> {values.join(', ')}</p>
      : <></>
    case 'definitionTranslation': return text ? <p>{text}</p> : <></>


    default: return <></>
  }
}

/**
 * Creates a flippable flash card based on a word
 * @param {{filled: boolean, cardData: CardData}} props 
 * @returns Flash card react component
 */
export default function FlashCard(props) {
  const flipped = props.flipped ?? false
  const cardData = props.cardData

  const word = cardData.word ?? '' // original word
  const definition = cardData.definition ?? ''
  const synonyms = cardData.synonyms ?? []
  const example = cardData.example ?? ''

  const translation = cardData.mainTranslation ?? ''
  const otherTranslations = cardData.otherTranslations ?? []
  const definitionTranslation = cardData.definitionTranslation ?? ''

  // TODO : How can I display flag emojis for the languages?
  const frontContent = <>
    {/* The display of emojis depends on the device the browser is running on */}
    <div className='FlashCardLanguagePrompt'>
      <span>🇸🇪</span>
      <span><i>Swedish</i></span>
    </div>
    <p><strong>{word}</strong></p>

    <hr></hr>

    <Element type='definition' text={definition} ></Element>
    <Element type='example' text={example} ></Element>
    <Element type='synonym' values={synonyms} ></Element>
  </>

  const backContent = <>
    <div className='FlashCardLanguagePrompt'>
      <span>🇬🇧</span>
      <span><i>English</i></span>
    </div>
    <p><strong>{translation}</strong></p>

    <hr></hr>

    <Element type='definitionTranslation' text={definitionTranslation} ></Element>
    <Element type='otherTranslations' values={otherTranslations} ></Element>
  </>

  return <FlipCard
    flipped={flipped}
    frontContent={frontContent}
    backContent={backContent}
  />
}


