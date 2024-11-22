import './Snackbar.css'
import { useRef } from 'react'
import React, { useEffect } from 'react'

/* Example from https://www.w3schools.com/howto/howto_js_snackbar.asp */

/**
 * A snackbar component that displays a message at the bottom of the screen.
 * @param {{text: string}} props - Component props
 * @returns {JSX.Element} New snackbar
 */
export default function Snackbar({ text, idx }) {
    const divRef = useRef(null)

    /* UseEffect with setTimeout example from https://www.freecodecamp.org/news/how-to-use-settimeout-in-react-using-hooks/ */
    useEffect(() => {
        const className = idx > 0 ? 'show' : ''
        divRef.current.className = className

        // Use setTimeout to hide snackbar
        const timeoutId = setTimeout(() => {
            divRef.current.className = ''
        }, 3000)
        // Cleanup function to clear the timeout if the component unmounts
        return () => clearTimeout(timeoutId)
    }, [idx]) // Effect will run every time idx changes


    return (
        <div id='snackbar' ref={divRef}>
            {text}
        </div>
    )
}
