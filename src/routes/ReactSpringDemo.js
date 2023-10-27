import Frame from '../components/Frame'
import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web'
import Hammer from 'hammerjs'
import { useEffect } from 'react';
import { useRef } from 'react';


export default function ReactSpringDemo(_props) {
  const [isSwipedOut, setSwipedOut] = useState(false);

  // Define a spring animation for the swipe-out effect
  const swipeAnimation = useSpring({
    transform: isSwipedOut ? 'translateX(100%)' : 'translateX(0%)',
    onRest: () => {
      // Callback to be invoked when the animation ends
      if (isSwipedOut) {
        console.log('Animation has ended.');
        // You can perform additional actions here.
      }
    },
  });

  const mainDiv = useRef(null)

  useEffect(() => {
    console.log('react spring demo mounted')
    const mc = new Hammer(mainDiv.current)

    mc.on('tap', () => {
        console.log('on tap')
    })

    /* hammerjs example here https://codepen.io/jtangelder/pen/jOZezm */
    // listen to events...
    mc.on("swipeleft swiperight press", function (ev) {
        console.log(ev.type + " gesture detected.")
    })
  }, [])

  const handleSwipe = () => {
    setSwipedOut(!isSwipedOut);
  };

  return (
    <Frame>
      <div ref={mainDiv} style={{ width: '100%', height: '100vh' }}>
        <animated.div
          style={{
            width: '100%',
            height: '100%',
            background: 'lightblue',
            cursor: 'pointer',
            ...swipeAnimation,
          }}
          onClick={handleSwipe}
        >
          <p>Click me to swipe me out!</p>
        </animated.div>
      </div>
    </Frame>
  );

}


