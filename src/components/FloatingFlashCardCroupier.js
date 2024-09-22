import FloatingFlashCardDeck from './FloatingFlashCardDeck'
import Sequence from '../model/Sequence'

import { useState, useEffect, useCallback } from 'react'
import CardDeck from '../model/CardDeck'
import CardDeckService from '../service/CardDeckService'

// eslint-disable-next-line
import SwipedCard from '../model/SwipedCard'

// TODO : Standardize languages
const cardDataDeckService = new CardDeckService('swe')

/**
 * Builds a deck of cards, deals them and keeps track of card swipes.
 * @param {{cardCount: number, discardCallback: (swipedCard: SwipedCard) => void}} props 
 * @returns floating flash card croupier
 */
export default function FloatingFlashCardCroupier(props) {
  const [cardIdx, setCardIdx] = useState(0)
  const [cardDataDeck, setCardDataDeck] = useState(CardDeck.empty())
  const cardCount = Math.min(cardDataDeck.length, props.cardCount)
  const discardCallback = props.discardCallback

  // async and use effect: https://devtrium.com/posts/async-functions-useeffect

  // declare the async data fetching function
  const fetchData = useCallback(async () => {
    console.log('Loading deck from JSON')
    const loadedDeck = await cardDataDeckService.loadFromJson()
    setCardDataDeck(loadedDeck);
  }, [])

  // the useEffect is only there to call `fetchData` at the right time
  useEffect(() => {
    fetchData().catch(console.error)
  }, [fetchData])

  const uniqueSequence = Sequence.unique(cardDataDeck.length)
  const shuffledDeck = uniqueSequence.apply(cardDataDeck.cardDataItems, cardCount)

  /** @param {SwipedCard} swipedCard swiped card */
  const swipeCallback = (swipedCard) => {
    const newCardIdx = Math.min(shuffledDeck.length, cardIdx + 1)
    setCardIdx(newCardIdx)

    const deckExhausted = newCardIdx > 0 && newCardIdx === cardCount
    discardCallback(deckExhausted ? swipedCard.exhausted() : swipedCard)
  }

  return (
    <FloatingFlashCardDeck
      deck={shuffledDeck}
      cardIdx={cardIdx}
      swipeCallback={swipeCallback}
    />
  )
}
