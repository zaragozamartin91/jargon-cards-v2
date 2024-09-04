import FloatingFlashCard from './FloatingFlashCard'

// eslint-disable-next-line
import CardData from '../model/CardData'


/**
 * Floating flash card deck component
 * @param {{cardIdx: number, deck: CardData[], swipeCallback: (swipeDirection: string) => void}} props
 * @returns React component representing a floating flash card deck
 */
export default function FloatingFlashCardDeck({cardIdx, deck, swipeCallback}) {
  /* Keys can be used to distinguish state within components */
  const nowTimestamp = Date.now()
  const floatingFlashCards = deck.map((cardDataItem, cardDataIdx) => {
    const floatingFlashCardKey = `${nowTimestamp}-${cardDataIdx++}`
    return <FloatingFlashCard swipeCallback={swipeCallback} cardData={cardDataItem} key={floatingFlashCardKey} />
  })


  /* Very important: https://react.dev/learn/preserving-and-resetting-state 
  State is tied to a position in the render tree
  */
  console.log('Rendering with card index ', cardIdx)
  return (
    floatingFlashCards[cardIdx]
  )
}