import FloatingFlashCardDeck from './FloatingFlashCardDeck'

import { useState, useEffect, useCallback } from 'react'
import CardDeck from '../model/CardDeck'
import CardDeckService from '../service/CardDeckService'

// eslint-disable-next-line
import SwipedCard from '../model/SwipedCard'
import Language from '../model/Language'

// TODO : Make language configurable
const cardDataDeckService = new CardDeckService(Language.Swedish)

/**
 * Builds a deck of cards, deals them and keeps track of card swipes.
 * @param {{cardCount: number, discardCallback: (swipedCard: SwipedCard) => void}} props 
 * @returns floating flash card croupier
 */
export default function FloatingFlashCardCroupier(props) {
  const [cardIdx, setCardIdx] = useState(0)
  const [cardDeck, setCardDeck] = useState(CardDeck.empty())
  const cardCount = Math.min(cardDeck.length, props.cardCount)
  const discardCallback = props.discardCallback

  // async and use effect: https://devtrium.com/posts/async-functions-useeffect

  // declare the async data fetching function
  const fetchData = useCallback(async () => {
    console.log('Loading deck from JSON')
    const loadedDeck = await cardDataDeckService.loadFromJson()
    setCardDeck(loadedDeck);
  }, [])

  // the useEffect is only there to call `fetchData` at the right time
  useEffect(() => {
    fetchData().catch(console.error)
  }, [fetchData])

  const shuffledDeck = cardDeck.sliceAndShuffle(cardCount)

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
