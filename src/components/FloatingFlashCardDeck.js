import Frame from './Frame'
import FloatingFlashCard from './FloatingFlashCard'
import { useState } from 'react'

export default function FloatingFlashCardDeck(_props) {
  const [cardIdx, setCardIdx] = useState(0)

  const cardData = [
    {
      word: 'även om',
      usage: 'även om danserna har förändrats',
      translation: 'even though',
      definition: ''
    },
    {
      word: 'användarnamnet',
      usage: 'det här användarnamnet är fint',
      translation: 'username',
      definition: 'Name of user in computer program typically used for online authentication purposes'
    },
    {
      word: 'bevis',
      usage: '"Det finns inte mycket bevis för det, men det är ändå \ntroligt att man ville fira årets längsta dag, \noch att det hade med fruktbarhet att göra."',
      translation: 'evidence',
      definition: 'Information used to demonstrate a case during a trial.'
    }
  ]

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

  /* Very important: https://react.dev/learn/preserving-and-resetting-state */
  console.log('Rendering with card index ', cardIdx)
  return (
    <Frame overflow={'hidden'}>
      {cardIdx === 0 && card0}
      {cardIdx === 1 && card1}
      {cardIdx === 2 && card2}
    </Frame>
  )
}