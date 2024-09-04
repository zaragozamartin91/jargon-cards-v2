import FlashCard from './FlashCard'
import { useSpring, animated } from '@react-spring/web'
import Hammer from 'hammerjs'
import { useState, useEffect, useRef } from 'react'

// eslint-disable-next-line
import CardData from '../model/CardData'

/**
 * A floating flash card component. It can be swiped left or right.
 * If a swipeCallback is passed in, it is called when the animation ends.
 * The swipeCallback is called with the direction of the swipe as an argument: 'left' or 'right'
 * 
 * @param {{swipeCallback: (swipeDirection: string) => void, cardData: CardData}} props
 * @returns Floating flash card react component
 */
export default function FloatingFlashCard(props) {
  const swipeCallback = props.swipeCallback ?? function () { }
  const cardData = props.cardData
  const [swipeDirection, setSwipeDirection] = useState('none')
  const [flipped, setFlipped] = useState(false)

  const swipeTransformations = {
    none: 'translateX(0%)', left: 'translateX(-500%)', right: 'translateX(500%)'
  }

  // Define a spring animation for the swipe-out effect
  const swipeAnimation = useSpring({
    transform: swipeTransformations[swipeDirection],
    onRest: () => {
      // Callback to be invoked when the animation ends
      if (['left', 'right'].includes(swipeDirection)) {
        console.log('Animation has ended.')

        // if swipeCallback is passed along then it is invoked
        swipeCallback(swipeDirection)
      }
    },
  })

  const mainDiv = useRef(null)

  /* Using useRef hook to control a non react widget
  https://react.dev/reference/react/useEffect#controlling-a-non-react-widget */
  useEffect(() => {
    console.log('Mounting component')
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
      setSwipeDirection('left')
    })

    mc.on("swiperight", (ev) => {
      console.log(ev.type + " gesture detected.")
      setSwipeDirection('right')
    })

    mc.on("press", (ev) => {
      console.log(ev.type + " gesture detected.")
      setSwipeDirection('none')
    })

    // https://react.dev/learn/synchronizing-with-effects#how-to-handle-the-effect-firing-twice-in-development
    return () => {
      console.log('Destroying hammer event listeners')
      mc.destroy()
    }
  }, [])

  console.log('Rendering card with word ', props.word)
  console.log('swipeDirection ', swipeDirection)
  return (
    <div ref={mainDiv}>
      <animated.div style={{ ...swipeAnimation }}>
        <FlashCard flipped={flipped} cardData={cardData} />
      </animated.div>
    </div>
  )
}


