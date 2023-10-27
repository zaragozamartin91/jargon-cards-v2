import Frame from '../components/Frame'
import FlashCard from '../components/FlashCard'
import { useState } from 'react';
import { useSpring, animated } from '@react-spring/web'
import Hammer from 'hammerjs'
import { useEffect } from 'react';
import { useRef } from 'react';


export default function JargonCardDemo(_props) {
  const [swiped, setSwiped] = useState(false);
  const [flipped, setFlipped] = useState(false)

  // Define a spring animation for the swipe-out effect
  const swipeAnimation = useSpring({
    transform: swiped ? 'translateX(500%)' : 'translateX(0%)',
    onRest: () => {
      // Callback to be invoked when the animation ends
      if (swiped) {
        console.log('Animation has ended.');
        // You can perform additional actions here.
      }
    },
  });

  const mainDiv = useRef(null)
  const flippedRef = useRef(flipped)
  const swipedRef = useRef(swiped)
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
      mc.on("swipeleft swiperight press", (ev) => {
        console.log(ev.type + " gesture detected.")
        swipedRef.current = !swipedRef.current
        setSwiped(swipedRef.current)
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


