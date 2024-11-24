import { useEffect, useRef } from 'react'
import './FlipCard.css'

/**
 * Creates a flippable card with front and back content.
 * @param {{frontContent: JSX.Element, backContent: JSX.Element, flipped: boolean}} props 
 * @returns {JSX.Element} New flip card
 */
export default function FlipCard({ frontContent, backContent, flipped }) {
    const flipCardInnerRef = useRef(null)

    useEffect(() => {
        const rotation = flipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
        flipCardInnerRef.current.style.transform = rotation
    }, [flipped])

    return <>
        <div className="FlipCard flip-card">
            <div className="flip-card-inner" ref={flipCardInnerRef}>
                <div className="flip-card-front">
                    {frontContent}
                </div>
                <div className="flip-card-back">
                    {backContent}
                </div>
            </div>
        </div>
    </>
}
