import FloatingFlashCardDeck from './FloatingFlashCardDeck'

import { useState, useEffect, useCallback } from 'react'
import CardDeck from '../model/CardDeck'
import CardDeckService from '../service/CardDeckService'

// eslint-disable-next-line
import SwipedCard from '../model/SwipedCard'
import Language from '../model/Language'

import Snackbar from './Snackbar'

// TODO : Make language configurable
// TODO : Should the card deck be loaded outside of this component?
const cardDataDeckService = new CardDeckService(Language.Swedish)

/**
 * Builds a deck of cards, deals them and keeps track of card swipes.
 * @param {{cardCount: number, discardCallback: (swipedCard: SwipedCard) => void}} props 
 * @returns floating flash card croupier
 */
export default function FloatingFlashCardCroupier(props) {
  const [cardIdx, setCardIdx] = useState(0)
  const [cardDeck, setCardDeck] = useState(CardDeck.empty())
  const [snackbarMessage, setSnackbarMessage] = useState('')
  
  const deckSize = Math.min(cardDeck.length, props.cardCount)
  const discardCallback = props.discardCallback

  // async and use effect: https://devtrium.com/posts/async-functions-useeffect

  // declare the async data fetching function
  const fetchData = useCallback(async () => {
    console.log('Loading deck from JSON')

    const loadedDeck = await cardDataDeckService.loadFromJson()
    // const loadedDeck = await cardDataDeckService.loadDummy()
    const shuffleSize = Math.min(loadedDeck.length, props.cardCount)
    const shuffledDeck = loadedDeck.sliceAndShuffle(shuffleSize)

    setCardDeck(shuffledDeck);
  }, [props.cardCount])

  // the useEffect is only there to call `fetchData` at the right time
  useEffect(() => {
    fetchData().catch(console.error)
  }, [fetchData])

  /** @param {SwipedCard} swipedCard swiped card */
  const swipeCallback = (swipedCard) => {
    setSnackbarMessage(swipedCard.swipedRight() ? 'Correct!' : 'Incorrect!')

    const newCardIdx = Math.min(cardDeck.length, cardIdx + 1)
    setCardIdx(newCardIdx)

    const deckExhausted = newCardIdx > 0 && newCardIdx >= deckSize
    discardCallback(deckExhausted ? swipedCard.exhausted() : swipedCard)
  }

  return (
    <>
      <FloatingFlashCardDeck
        deck={cardDeck}
        cardIdx={cardIdx}
        swipeCallback={swipeCallback}
      />
      <Snackbar text={snackbarMessage} idx={cardIdx}></Snackbar>
    </>
  )
}
