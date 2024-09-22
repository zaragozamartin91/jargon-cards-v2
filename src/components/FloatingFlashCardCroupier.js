import FloatingFlashCardDeck from './FloatingFlashCardDeck'
import Sequence from '../model/Sequence'

import { useState, useEffect, useCallback } from 'react'
import CardDeck from '../model/CardDeck'
import CardDeckService from '../service/CardDeckService'


const cardDataDeckService = new CardDeckService('swe')

/**
 * Builds a deck of cards, deals them and keeps track of card swipes.
 * @param {{cardCount: number}} props 
 * @returns floating flash card croupier
 */
export default function FloatingFlashCardCroupier(props) {
  const [cardIdx, setCardIdx] = useState(0)
  const [swipes, setSwipes] = useState([])
  const [cardDataDeck, setCardDataDeck] = useState(CardDeck.empty())
  const cardCount = Math.min(cardDataDeck.length, props.cardCount)
  const updateScoreCallback = props.updateScoreCallback
  const cardsExhaustedCallback = props.cardsExhaustedCallback

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

  useEffect(() => {
    const score = swipes.filter(swipe => swipe === 'right').length
    updateScoreCallback(score)
  }, [swipes, updateScoreCallback])

  useEffect(() => {
    if (cardIdx > 0 && cardIdx === cardCount) {
      cardsExhaustedCallback()
    }
  }, [cardIdx, cardCount, cardsExhaustedCallback])

  const uniqueSequence = Sequence.unique(cardDataDeck.length)
  const shuffledDeck = uniqueSequence.apply(cardDataDeck.cardDataItems, cardCount)

  const swipeCallback = (swipeDirection) => {
    console.log(`Card swiped to the ${swipeDirection}`)

    setCardIdx(ci => {
      const newCardIdx = Math.min(shuffledDeck.length, ci + 1)
      console.log('New card index: ', newCardIdx)
      return newCardIdx
    })

    const newSwipes = [...swipes, swipeDirection]
    setSwipes(newSwipes)
    console.log('New Swipes: ', newSwipes)
  }

  return (
    <FloatingFlashCardDeck
      deck={shuffledDeck}
      cardIdx={cardIdx}
      swipeCallback={swipeCallback}
    />
  )
}
