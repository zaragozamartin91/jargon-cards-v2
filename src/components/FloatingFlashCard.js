import FlashCard from './FlashCard'
import { useSpring, animated } from '@react-spring/web'
import Hammer from 'hammerjs'
import { useState, useEffect, useRef } from 'react'

// eslint-disable-next-line
import CardData from '../model/CardData'
import SwipedCard from '../model/SwipedCard'
import Direction from '../model/Direction'

/**
 * A floating flash card component. It can be swiped left or right.
 * If a swipeCallback is passed in, it is called when the animation ends.
 * The swipeCallback is called with the direction of the swipe as an argument: 'left' or 'right'
 * 
 * @param {{swipeCallback: (swipedCard: SwipedCard) => void, cardData: CardData}} props
 * @returns Floating flash card react component
 */
export default function FloatingFlashCard({ cardData, swipeCallback }) {
  const [swipeDirection, setSwipeDirection] = useState(Direction.None)
  const [flipped, setFlipped] = useState(false)

  const swipeTransformations = {}
  swipeTransformations[Direction.None] = 'translateX(0%)'
  swipeTransformations[Direction.Left] = 'translateX(-500%)'
  swipeTransformations[Direction.Right] = 'translateX(500%)'

  // Define a spring animation for the swipe-out effect
  const swipeAnimation = useSpring({
    transform: swipeTransformations[swipeDirection],
    onRest: () => {
      // Callback to be invoked when the animation ends
      if ([Direction.Left, Direction.Right].includes(swipeDirection)) {
        console.log('Animation has ended.')

        const swipedCard = new SwipedCard({ swipeDirection, cardData })
        swipeCallback(swipedCard)
      }
    },
  })

  const mainDiv = useRef(null)

  /* Using useRef hook to control a non react widget
  https://react.dev/reference/react/useEffect#controlling-a-non-react-widget */
  useEffect(() => {
    console.log('Mounting FloatingFlashCard component')
    const mc = new Hammer(mainDiv.current)
    mc.on('tap', () => {
      console.log('on tap')
      // https://react.dev/reference/react/useEffect#updating-state-based-on-previous-state-from-an-effect
      setFlipped(f => !f)
    })

    /* hammerjs example here https://codepen.io/jtangelder/pen/jOZezm */
    // listen to events...
    mc.on("swipeleft", (ev) => {
      console.log(ev.type + " gesture detected.")
      setSwipeDirection(Direction.Left)
    })

    mc.on("swiperight", (ev) => {
      console.log(ev.type + " gesture detected.")
      setSwipeDirection(Direction.Right)
    })

    mc.on("press", (ev) => {
      console.log(ev.type + " gesture detected.")
      setSwipeDirection(Direction.None)
    })

    // https://react.dev/learn/synchronizing-with-effects#how-to-handle-the-effect-firing-twice-in-development
    return () => {
      console.log('Destroying hammer event listeners')
      mc.destroy()
    }
  }, [])

  console.log('Rendering card with word ', cardData.word)
  console.log('swipeDirection ', swipeDirection.name)
  return (
    <div ref={mainDiv} className='FloatingFlashCard'>
      <animated.div style={{ ...swipeAnimation }}>
        <FlashCard flipped={flipped} cardData={cardData} />
      </animated.div>
    </div>
  )
}


