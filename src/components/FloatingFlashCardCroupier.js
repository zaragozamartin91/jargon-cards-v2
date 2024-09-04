import FloatingFlashCardDeck from './FloatingFlashCardDeck'
import QueryParams from '../service/QueryParams'
import Sequence from '../model/Sequence'

import { useState, useEffect, useCallback } from 'react'
import CardDataDeck from '../model/CardDataDeck'
import CardDataDeckService from '../service/CardDataDeckService'


const cardDataDeckService = new CardDataDeckService('swe')

/**
 * Sets up a floating flash card croupier
 * @param {{cardCount: number}} props 
 * @returns floating flash card croupier
 */
export default function FloatingFlashCardCroupier(props) {
  const [cardDataDeck, setCardDataDeck] = useState(CardDataDeck.empty())
  const cardCount = Math.min(cardDataDeck.length, props.cardCount)

  // async and use effect: https://devtrium.com/posts/async-functions-useeffect

  // declare the async data fetching function
  const fetchData = useCallback(async () => {
    console.log('Loading card data from JSON')
    const loadedDeck = await cardDataDeckService.loadFromJson()
    setCardDataDeck(loadedDeck);  
  }, [])

  // the useEffect is only there to call `fetchData` at the right time
  useEffect(() => {
    fetchData()
      // make sure to catch any error
      .catch(console.error)
  }, [fetchData])

  const queryParams = new QueryParams()
  console.log('queryParams: ', queryParams.searchParams)

  const sequence = Sequence.unique(cardDataDeck.length)
  const cardSequence = sequence.apply(cardDataDeck.cardDataItems, cardCount)

  return (
    <FloatingFlashCardDeck deck={cardSequence} />
  )
}
