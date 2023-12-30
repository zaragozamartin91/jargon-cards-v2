import Frame from '../components/Frame'
import FloatingFlashCard from '../components/FloatingFlashCard'
import { useState } from 'react'

export default function JargonCardDemo(_props) {
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

  /* Very important: https://react.dev/learn/preserving-and-resetting-state */
  console.log('Rendering with card index ', cardIdx)
  return (
    <Frame overflow={'hidden'}>
      {cardIdx === 0 && card0}
      {cardIdx === 1 && card1}
    </Frame>
  )
}