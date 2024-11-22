import FloatingFlashCard from './FloatingFlashCard'

// eslint-disable-next-line
import CardDeck from '../model/CardDeck'


/**
 * Floating flash card deck component
 * @param {{cardIdx: number, deck: CardDeck, swipeCallback: (swipeDirection: string) => void}} props
 * @returns React component representing a floating flash card deck
 */
export default function FloatingFlashCardDeck({cardIdx, deck, swipeCallback}) {
  /* Keys can be used to distinguish state within components */
  const nowTimestamp = Date.now()
  const floatingFlashCards = deck.cardDataItems.map((cardDataItem, cardDataIdx) => {
    const floatingFlashCardKey = `${nowTimestamp}-${cardDataIdx++}`
    return <FloatingFlashCard swipeCallback={swipeCallback} cardData={cardDataItem} key={floatingFlashCardKey} />
  })


  /* Very important: https://react.dev/learn/preserving-and-resetting-state 
  State is tied to a position in the render tree

  TODO: Can we render all cards at once and make them STACKABLE using smart positioning?
  https://www.freecodecamp.org/news/css-positioning-position-absolute-and-relative/
  EG: use z-index with absolute positioning
  */
  console.log('Rendering with card index ', cardIdx)
  return (
    floatingFlashCards[cardIdx]
  )
}