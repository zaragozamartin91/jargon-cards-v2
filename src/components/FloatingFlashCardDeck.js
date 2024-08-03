import FloatingFlashCard from './FloatingFlashCard'
import { useState } from 'react'
// eslint-disable-next-line
import CardData from '../model/CardData'

/**
 * @param {{cardData: CardData[]}} props description
 */
export default function FloatingFlashCardDeck(props) {
  // TODO: move state to parent component
  const [cardIdx, setCardIdx] = useState(0)

  const cardData = props.cardData

  const swipeCallback = (swipeDirection) => {
    console.log(`Card swiped to the ${swipeDirection}`)
    setCardIdx(ci => {
      const newCardIdx = Math.min(cardData.length, ci + 1)
      console.log('New card index ', newCardIdx)
      return newCardIdx
    })
  }

  /* Keys can be used to distinguish state within components */
  const cardDatakeyPrefix = Date.now()
  const floatingFlashCards = cardData.map((cardDataValue, cardDataIdx) => {
    const cardDatakey = `${cardDatakeyPrefix}-${cardDataIdx++}`
    return <FloatingFlashCard swipeCallback={swipeCallback} {...cardDataValue} key={cardDatakey} />
  })


  /* Very important: https://react.dev/learn/preserving-and-resetting-state 
  State is tied to a position in the render tree
  */
  console.log('Rendering with card index ', cardIdx)
  return (
    floatingFlashCards[cardIdx]
  )
}