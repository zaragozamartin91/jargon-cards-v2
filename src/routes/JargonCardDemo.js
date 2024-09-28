import { useState } from "react"
import FloatingFlashCardCroupier from "../components/FloatingFlashCardCroupier"
import Frame from "../components/Frame"

// eslint-disable-next-line
import SwipedCard from "../model/SwipedCard"

// Todo: make card count configurable somehow
const _CARD_COUNT = 10

/** @type {SwipedCard[]} swipedCard */ 
const _EMPTY_SWIPED_CARDS = []

export default function JargonCardDemo(_props) {

  const [discardedCards, setDiscardedCards] = useState(_EMPTY_SWIPED_CARDS)
  
  /** @param {SwipedCard} swipedCard swiped card */
  const discardCallback = (swipedCard) => {
    console.log(`Discarded card: ${swipedCard.cardData.word}`)
    setDiscardedCards([...discardedCards, swipedCard])
  }

  const score = SwipedCard.totalScore(discardedCards)

  return (
    <>
      <Frame overflow={'hidden'}>

        <progress max={_CARD_COUNT} value={score}></progress>
        <p>Score: {score}</p>

        <FloatingFlashCardCroupier
          overflow={'hidden'} 
          cardCount={_CARD_COUNT}
          discardCallback={discardCallback}
        />

      </Frame>
    </>
  )
}