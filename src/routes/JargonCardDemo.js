import Frame from '../components/Frame'
import FlashCard from '../components/FlashCard'
import { useSpring, animated } from '@react-spring/web'
import Hammer from 'hammerjs'
import { useState, useEffect, useRef } from 'react'



export default function JargonCardDemo(props) {
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
        props.swipeCallback?.(swipeDirection)
      }
    },
  })

  const mainDiv = useRef(null)
  const flippedRef = useRef(flipped)
  const mountedRef = useRef(false)

  /* Using useRef hook to control a non react widget
  https://react.dev/reference/react/useEffect#controlling-a-non-react-widget */
  useEffect(() => {
    if (mountedRef.current) {
      console.log('Component already mounted')
    } else {
      console.log('Mounting component')
      const mc = new Hammer(mainDiv.current)
      mc.on('tap', () => {
        console.log('on tap')
        console.log('flippedRef.current: ', flippedRef.current)
        flippedRef.current = !flippedRef.current
        setFlipped(flippedRef.current)
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

      mountedRef.current = true
    }
  }, [])


  return (
    <Frame overflow={'hidden'}>
      <div ref={mainDiv}>
        <animated.div style={{ ...swipeAnimation }}>
          <FlashCard flipped={flipped} frontText={'This is the front side'} backText={'This is the BAACK SIDE'} />
        </animated.div>
      </div>
    </Frame>
  )
}


