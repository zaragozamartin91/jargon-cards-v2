import { useState } from "react"
import { Link } from "react-router-dom"

import FloatingFlashCardCroupier from "../components/FloatingFlashCardCroupier"
import Frame from "../components/Frame"
import SparklyFrame from '../components/SparklyFrame'
import SuccessScreen from '../components/SuccessScreen'

// eslint-disable-next-line
import SwipedCard from "../model/SwipedCard"
import Scoreboard from "../components/Scoreboard"

import WrapperButton from "../components/WrapperButton"

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
  const deckExausted = SwipedCard.cardsExhausted(discardedCards)

  return deckExausted
    ? (
      <SparklyFrame>
        <SuccessScreen cardCount={_CARD_COUNT} score={score}></SuccessScreen>
      </SparklyFrame>
    )
    : (
      <Frame overflow={'hidden'}>
        <Link to="/">
          <WrapperButton qualifiers={['round', 'top', 'right', 'single']}>
            <span><strong>X</strong></span>
          </WrapperButton>
        </Link>

        <Scoreboard
          maxScore={_CARD_COUNT}
          progressValue={discardedCards.length}
          score={score}>
        </Scoreboard>

        <FloatingFlashCardCroupier
          overflow={'hidden'}
          cardCount={_CARD_COUNT}
          discardCallback={discardCallback}
        />

      </Frame>
    )
}