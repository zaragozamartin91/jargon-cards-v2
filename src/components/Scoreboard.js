import React from 'react'

export default function Scoreboard({ maxScore = 0, progressValue = 0,  score = 0 }) {

  return <>
    <progress max={maxScore} value={progressValue}></progress>
    <p>Score: {score}</p>
  </>
}
