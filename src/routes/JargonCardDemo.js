import { useState } from "react"
import FloatingFlashCardCroupier from "../components/FloatingFlashCardCroupier"
import Frame from "../components/Frame"


export default function JargonCardDemo(_props) {
  const [score, setScore] = useState(0)
  

  const updateScoreCallback = (newScore) => {
    console.log('Score updated: ', newScore)
    setScore(newScore)
  }

  const cardsExhaustedCallback = () => {
    console.log('Cards Exhausted')
  }

  return (
    <>
      <Frame overflow={'hidden'}>

        <p>Score: {score}/10</p>

        <FloatingFlashCardCroupier
          overflow={'hidden'} 
          cardCount={10}
          updateScoreCallback={updateScoreCallback} 
          cardsExhaustedCallback={cardsExhaustedCallback}
        />

      </Frame>
    </>
  )
}