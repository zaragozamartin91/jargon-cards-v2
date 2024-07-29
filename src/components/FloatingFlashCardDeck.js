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

  const card0 = <FloatingFlashCard
    swipeCallback={swipeCallback}
    {...cardData[0]}
  />

  const card1 = <FloatingFlashCard
    swipeCallback={swipeCallback}
    {...cardData[1]}
  />

  const card2 = <FloatingFlashCard
    swipeCallback={swipeCallback}
    {...cardData[2]}
  />

  /* Very important: https://react.dev/learn/preserving-and-resetting-state 
  State is tied to a position in the render tree
  */
  console.log('Rendering with card index ', cardIdx)
  return (
    <>
      {cardIdx === 0 && card0}
      {cardIdx === 1 && card1}
      {cardIdx === 2 && card2}
    </>
  )
}